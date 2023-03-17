import React, { useState, useEffect, useMemo } from "react";
import {
  TextField,
  Typography,
  InputAdornment,
  Box,
  Button,
  MenuItem,
  IconButton,
  Dialog,
  CircularProgress,
} from "@mui/material";
import Image from 'next/image';
import {
  Search,
  ArrowDownward,
  ArrowForwardIos,
  DeleteOutline,
} from "@mui/icons-material";

import { withTheme } from "@mui/styles";

import { formatCurrency } from "../../utils/utils";

import classes from "./ssSwap.module.css";

import stores from "../../stores";
import {
  ACTIONS,
  ETHERSCAN_URL,
  W_NATIVE_ADDRESS,
} from "../../stores/constants/constants";
import BigNumber from "bignumber.js";
import type { BaseAsset } from "../../stores/types/types";

function Setup() {
  const [, updateState] = React.useState<{}>();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const [loading, setLoading] = useState(false);
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [approvalLoading, setApprovalLoading] = useState(false);

  const [fromAmountValue, setFromAmountValue] = useState("");
  const [fromAmountValueUsd, setFromAmountValueUsd] = useState("");
  const [fromAmountError, setFromAmountError] = useState<false | string>(false);
  const [fromAssetValue, setFromAssetValue] = useState<BaseAsset>(null);
  const [fromAssetError, setFromAssetError] = useState<false | string>(false);
  const [fromAssetOptions, setFromAssetOptions] = useState<BaseAsset[]>([]);

  const [toAmountValue, setToAmountValue] = useState("");
  const [toAmountValueUsd, setToAmountValueUsd] = useState("");
  const [toAmountError, setToAmountError] = useState(false);
  const [toAssetValue, setToAssetValue] = useState<BaseAsset>(null);
  const [toAssetError, setToAssetError] = useState(false);
  const [toAssetOptions, setToAssetOptions] = useState<BaseAsset[]>([]);

  const [slippage, setSlippage] = useState("2");
  const [slippageError, setSlippageError] = useState(false);

  const [quoteError, setQuoteError] = useState(null);
  const [quote, setQuote] = useState(null);

  const [tokenPrices, setTokenPrices] = useState<Map<string, number>>();

  const usdDiff = useMemo(() => {
    if (
      fromAmountValueUsd &&
      fromAmountValueUsd === "" &&
      toAmountValueUsd &&
      toAmountValueUsd === "" &&
      (parseFloat(fromAmountValueUsd) === 0 ||
        parseFloat(toAmountValueUsd) === 0)
    )
      return "";
    if (parseFloat(fromAmountValueUsd) === parseFloat(toAmountValueUsd)) return;
    if (parseFloat(fromAmountValueUsd) === parseFloat(toAmountValueUsd)) return;
    fromAmountValueUsd &&
      fromAmountValueUsd !== "" &&
      toAmountValueUsd &&
      toAmountValueUsd !== "";

    const increase =
      ((parseFloat(toAmountValueUsd) - parseFloat(fromAmountValueUsd)) /
        parseFloat(fromAmountValueUsd)) *
      100;
    const decrease =
      ((parseFloat(fromAmountValueUsd) - parseFloat(toAmountValueUsd)) /
        parseFloat(fromAmountValueUsd)) *
      100;
    const diff =
      parseFloat(fromAmountValueUsd) > parseFloat(toAmountValueUsd)
        ? -1 * decrease
        : increase;
    return diff.toFixed(2);
  }, [fromAmountValueUsd, toAmountValueUsd]);

  useEffect(
    function () {
      const errorReturned = () => {
        setLoading(false);
        setApprovalLoading(false);
        setQuoteLoading(false);
      };

      const quoteReturned = (val) => {
        if (!val) {
          setQuoteLoading(false);
          setQuote(null);
          setToAmountValue("");
          setToAmountValueUsd("");
          setQuoteError(
            "Insufficient liquidity or no route available to complete swap"
          );
        }
        if (
          val &&
          val.inputs &&
          val.output &&
          val.inputs.fromAmount === fromAmountValue &&
          val.inputs.fromAsset.address === fromAssetValue.address &&
          val.inputs.toAsset.address === toAssetValue.address
        ) {
          setQuoteLoading(false);
          if (BigNumber(val.output.finalValue).eq(0)) {
            setQuote(null);
            setToAmountValue("");
            setToAmountValueUsd("");
            setQuoteError(
              "Insufficient liquidity or no route available to complete swap"
            );
            return;
          }

          setToAmountValue(BigNumber(val.output.finalValue).toFixed(8));
          const toAddressLookUp =
            val.inputs.toAsset.address === "CANTO"
              ? W_NATIVE_ADDRESS.toLowerCase()
              : val.inputs.toAsset.address.toLowerCase();
          const toUsdValue = BigNumber(val.output.finalValue)
            .multipliedBy(tokenPrices.get(toAddressLookUp))
            .toFixed(2);
          setToAmountValueUsd(toUsdValue);
          setQuote(val);
        }
      };

      const ssUpdated = () => {
        const swapAssets = stores.stableSwapStore.getStore("swapAssets");
        const tokenPrices = stores.helper.getTokenPricesMap;

        setToAssetOptions(swapAssets);
        setFromAssetOptions(swapAssets);

        if (swapAssets.length > 0 && toAssetValue == null) {
          setToAssetValue(swapAssets[0]);
        }

        if (swapAssets.length > 0 && fromAssetValue == null) {
          setFromAssetValue(swapAssets[1]);
        }

        if (tokenPrices.size > 0) {
          setTokenPrices(tokenPrices);
        }

        forceUpdate();
      };

      const assetsUpdated = () => {
        const swapAssets = stores.stableSwapStore.getStore("swapAssets");

        setToAssetOptions(swapAssets);
        setFromAssetOptions(swapAssets);
      };

      const swapReturned = (event) => {
        setLoading(false);
        setFromAmountValue("");
        setToAmountValue("");
        setFromAmountValueUsd("");
        setToAmountValueUsd("");
        calculateReceiveAmount("", fromAssetValue, toAssetValue);
        setQuote(null);
        setQuoteLoading(false);
      };

      stores.emitter.on(ACTIONS.ERROR, errorReturned);
      stores.emitter.on(ACTIONS.UPDATED, ssUpdated);
      stores.emitter.on(ACTIONS.SWAP_RETURNED, swapReturned);
      stores.emitter.on(ACTIONS.QUOTE_SWAP_RETURNED, quoteReturned);
      stores.emitter.on(ACTIONS.BASE_ASSETS_UPDATED, assetsUpdated);

      ssUpdated();

      return () => {
        stores.emitter.removeListener(ACTIONS.ERROR, errorReturned);
        stores.emitter.removeListener(ACTIONS.UPDATED, ssUpdated);
        stores.emitter.removeListener(ACTIONS.SWAP_RETURNED, swapReturned);
        stores.emitter.removeListener(
          ACTIONS.QUOTE_SWAP_RETURNED,
          quoteReturned
        );
        stores.emitter.removeListener(
          ACTIONS.BASE_ASSETS_UPDATED,
          assetsUpdated
        );
      };
    },
    [fromAmountValue, fromAssetValue, toAssetValue]
  );

  const onAssetSelect = (type, value) => {
    if (type === "From") {
      if (value.address === toAssetValue.address) {
        setToAssetValue(fromAssetValue);
        setFromAssetValue(toAssetValue);
        calculateReceiveAmount(fromAmountValue, toAssetValue, fromAssetValue);
      } else {
        setFromAssetValue(value);
        calculateReceiveAmount(fromAmountValue, value, toAssetValue);
      }
    } else {
      if (value.address === fromAssetValue.address) {
        setFromAssetError(false);
        setToAssetValue(fromAssetValue);
        calculateReceiveAmount(fromAmountValue, toAssetValue, fromAssetValue);
      } else {
        setToAssetValue(value);
        calculateReceiveAmount(fromAmountValue, fromAssetValue, value);
      }
    }

    forceUpdate();
  };

  const fromAmountChanged = (event) => {
    setFromAmountError(false);
    setFromAmountValue(event.target.value);
    if (event.target.value == "") {
      setToAmountValue("");
      setQuote(null);
      setFromAmountValueUsd("");
      setToAmountValueUsd("");
    } else {
      setFromAmountValueUsd(
        (
          parseFloat(event.target.value) *
          tokenPrices.get(
            fromAssetValue.address === "CANTO"
              ? W_NATIVE_ADDRESS.toLowerCase()
              : fromAssetValue.address.toLowerCase()
          )
        ).toFixed(2)
      );
      calculateReceiveAmount(event.target.value, fromAssetValue, toAssetValue);
    }
  };

  const toAmountChanged = (event) => {};

  const onSlippageChanged = (event) => {
    if (event.target.value == "" || !isNaN(event.target.value)) {
      setSlippage(event.target.value);
    }
  };

  const calculateReceiveAmount = (
    amount: string,
    from: BaseAsset,
    to: BaseAsset
  ) => {
    if (
      (from.symbol === "WCANTO" && to.symbol === "CANTO") ||
      (from.symbol === "CANTO" && to.symbol === "WCANTO")
    ) {
      setQuoteLoading(false);
      setQuote(null);
      setToAmountValue(amount);
      setToAmountValueUsd("");
      setQuoteError("No support for wrapping/unwrapping WCANTO yet");
      return;
    }
    if (
      amount !== "" &&
      !isNaN(+amount) &&
      to != null &&
      parseFloat(amount) !== 0
    ) {
      setQuoteLoading(true);
      setQuoteError(false);

      stores.dispatcher.dispatch({
        type: ACTIONS.QUOTE_SWAP,
        content: {
          fromAsset: from,
          toAsset: to,
          fromAmount: amount,
        },
      });
    }
  };

  const onSwap = () => {
    setFromAmountError(false);
    setFromAssetError(false);
    setToAssetError(false);

    let error = false;

    if (!fromAmountValue || fromAmountValue === "" || isNaN(+fromAmountValue)) {
      setFromAmountError("From amount is required");
      error = true;
    } else {
      if (
        !fromAssetValue.balance ||
        isNaN(+fromAssetValue.balance) || // TODO probably dont neet it
        BigNumber(fromAssetValue.balance).lte(0)
      ) {
        setFromAmountError("Invalid balance");
        error = true;
      } else if (BigNumber(fromAmountValue).lt(0)) {
        setFromAmountError("Invalid amount");
        error = true;
      } else if (
        fromAssetValue &&
        BigNumber(fromAmountValue).gt(fromAssetValue.balance)
      ) {
        setFromAmountError(`Greater than your available balance`);
        error = true;
      }
    }

    if (!fromAssetValue || fromAssetValue === null) {
      setFromAssetError("From asset is required");
      error = true;
    }

    if (!toAssetValue || toAssetValue === null) {
      setFromAssetError("To asset is required");
      error = true;
    }

    if (!error) {
      setLoading(true);

      stores.dispatcher.dispatch({
        type: ACTIONS.SWAP,
        content: {
          fromAsset: fromAssetValue,
          toAsset: toAssetValue,
          fromAmount: fromAmountValue,
          toAmount: toAmountValue,
          quote: quote,
          slippage: slippage,
        },
      });
    }
  };

  const setBalance100 = () => {
    const am = BigNumber(fromAssetValue.balance).toFixed(4);
    setFromAmountValue(am);
    setFromAmountValueUsd(
      (
        parseFloat(am) *
        tokenPrices.get(
          fromAssetValue.address === "CANTO"
            ? W_NATIVE_ADDRESS.toLowerCase()
            : fromAssetValue.address.toLowerCase()
        )
      ).toFixed(2)
    );
    calculateReceiveAmount(am, fromAssetValue, toAssetValue);
  };

  const swapAssets = () => {
    const fa = fromAssetValue;
    const ta = toAssetValue;
    setFromAssetValue(ta);
    setToAssetValue(fa);
    calculateReceiveAmount(fromAmountValue, ta, fa);
  };

  const renderSwapInformation = () => {
    if (quoteError) {
      return (
        <div className={classes.quoteLoader}>
          <Typography className={classes.quoteError}>{quoteError}</Typography>
        </div>
      );
    }

    if (quoteLoading) {
      return (
        <div className={classes.quoteLoader}>
          <CircularProgress size={20} className={classes.loadingCircle} />
        </div>
      );
    }

    if (!quote) {
      return null;
    }

    return (
      <div className={classes.depositInfoContainer}>
        <Typography className={classes.depositInfoHeading}>
          Price Info
        </Typography>
        <div className={classes.priceInfos}>
          <div className={classes.priceInfo}>
            <Typography className={classes.title}>
              {formatCurrency(
                BigNumber(quote.inputs.fromAmount)
                  .div(quote.output.finalValue)
                  .toFixed(18)
              )}
            </Typography>
            <Typography
              className={classes.text}
            >{`${fromAssetValue?.symbol} per ${toAssetValue?.symbol}`}</Typography>
          </div>
          <div className={classes.priceInfo}>
            <Typography className={classes.title}>
              {formatCurrency(
                BigNumber(quote.output.finalValue)
                  .div(quote.inputs.fromAmount)
                  .toFixed(18)
              )}
            </Typography>
            <Typography
              className={classes.text}
            >{`${toAssetValue?.symbol} per ${fromAssetValue?.symbol}`}</Typography>
          </div>
          <div className={classes.priceInfo}>
            {renderSmallInput(
              "slippage",
              slippage,
              slippageError,
              onSlippageChanged
            )}
          </div>
        </div>
        <Typography className={classes.depositInfoHeading}>Route</Typography>
        <div className={classes.route}>
          <img
            className={classes.displayAssetIconSmall}
            alt=""
            src={fromAssetValue ? `${fromAssetValue.logoURI}` : ""}
            height="40px"
            onError={(e) => {
              (e.target as HTMLImageElement).onerror = null;
              (e.target as HTMLImageElement).src = "/tokens/unknown-logo.png";
            }}
          />
          <div className={classes.line}>
            <div className={classes.routeArrow}>
              <ArrowForwardIos className={classes.routeArrowIcon} />
            </div>
            <div className={classes.stabIndicatorContainer}>
              <Typography className={classes.stabIndicator}>
                {quote.output.routes[0].stable ? "Stable" : "Volatile"}
              </Typography>
            </div>
          </div>
          {quote && quote.output && quote.output.routeAsset && (
            <>
              <img
                className={classes.displayAssetIconSmall}
                alt=""
                src={
                  quote.output.routeAsset
                    ? `${quote.output.routeAsset.logoURI}`
                    : ""
                }
                height="40px"
                onError={(e) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src =
                    "/tokens/unknown-logo.png";
                }}
              />
              <div className={classes.line}>
                <div className={classes.routeArrow}>
                  <ArrowForwardIos className={classes.routeArrowIcon} />
                </div>
                <div className={classes.stabIndicatorContainer}>
                  <Typography className={classes.stabIndicator}>
                    {quote.output.routes[1].stable ? "Stable" : "Volatile"}
                  </Typography>
                </div>
              </div>
            </>
          )}
          <img
            className={classes.displayAssetIconSmall}
            alt=""
            src={toAssetValue ? `${toAssetValue.logoURI}` : ""}
            height="40px"
            onError={(e) => {
              (e.target as HTMLImageElement).onerror = null;
              (e.target as HTMLImageElement).src = "/tokens/unknown-logo.png";
            }}
          />
        </div>
        {BigNumber(quote.priceImpact).gt(0.5) && (
          <div className={classes.warningContainer}>
            <Typography
              className={
                BigNumber(quote.priceImpact).gt(5)
                  ? classes.warningError
                  : classes.warningWarning
              }
              align="center"
            >
              Price impact {formatCurrency(quote.priceImpact)}%
            </Typography>
          </div>
        )}
      </div>
    );
  };

  const renderSmallInput = (type, amountValue, amountError, amountChanged) => {
    return (
      <div className={classes.textField}>
        <div className={classes.inputTitleContainerSlippage}>
          <div className={classes.inputBalanceSlippage}>
            <Typography className={classes.inputBalanceTextSlippage} noWrap>
              Slippage
            </Typography>
          </div>
        </div>
        <div className={classes.smallInputContainer}>
          <TextField
            placeholder="0.00"
            fullWidth
            error={amountError}
            helperText={amountError}
            value={amountValue}
            onChange={amountChanged}
            disabled={loading}
            InputProps={{
              className: classes.smallInput,
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          />
        </div>
      </div>
    );
  };

  const renderMassiveInput = (
    type,
    amountValue,
    amountValueUsd,
    diffUsd,
    amountError,
    amountChanged,
    assetValue,
    assetError,
    assetOptions,
    onAssetSelect
  ) => {
    return (
      <div className={classes.textField}>
        <div
          className={classes.inputTitleContainer}
          onClick={() => {
            if (type === "From") {
              setBalance100();
            }
          }}
        >
          <Typography className={classes.inputBalanceText} noWrap>
            Balance:
            {assetValue && assetValue.balance
              ? " " + formatCurrency(assetValue.balance)
              : ""}
          </Typography>
        </div>
        {assetValue &&
        assetValue.balance &&
        amountValueUsd &&
        amountValueUsd !== "" ? (
          <div
            className={`${classes.inputTitleContainer} ${classes.usdContainer}`}
          >
            <Typography className={classes.inputBalanceText} noWrap>
              {"~$" +
                formatCurrency(amountValueUsd) +
                (type === "To" && diffUsd && diffUsd !== ""
                  ? ` (${diffUsd}%)`
                  : "")}
            </Typography>
          </div>
        ) : null}
        <div
          className={`${classes.massiveInputContainer} ${
            (amountError || assetError) && classes.error
          }`}
        >
          <div className={classes.massiveInputAssetSelect}>
            <AssetSelect
              type={type}
              value={assetValue}
              assetOptions={assetOptions}
              onSelect={onAssetSelect}
            />
          </div>
          <div className={classes.massiveInputAmount}>
            <TextField
              placeholder="0.00"
              fullWidth
              error={amountError}
              helperText={amountError}
              value={amountValue}
              onChange={amountChanged}
              disabled={loading || type === "To"}
              InputProps={{
                className: classes.largeInput,
              }}
            />

            <Typography color="textSecondary" className={classes.smallerText}>
              {assetValue?.symbol}
            </Typography>
          </div>
        </div>
      </div>
    );
  };
    // container inside swapcontainer 
  return (
    <div className={classes.swapInputs}>
       <Box mb="20px">
       <Image src={`/images/menu_Swap_icon.svg`} width={35} height={35}/>
          Swap 
       </Box>

      {renderMassiveInput(
        "From",
        fromAmountValue,
        fromAmountValueUsd,
        usdDiff,
        fromAmountError,
        fromAmountChanged,
        fromAssetValue,
        fromAssetError,
        fromAssetOptions,
        onAssetSelect
      )}
       <Box>
      <div className={classes.swapIconContainer}>
        <Image src={`/images/swap.svg`} className={classes.swapIcon} width={20} height={20} onClick={swapAssets} />
        
      </div>
      </Box>
      {renderMassiveInput(
        "To",
        toAmountValue,
        toAmountValueUsd,
        usdDiff,
        toAmountError,
        toAmountChanged,
        toAssetValue,
        toAssetError,
        toAssetOptions,
        onAssetSelect
      )}
      {renderSwapInformation()}
      <div className={classes.actionsContainer}>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.buttonOverride}
          disabled={loading || quoteLoading || !quote}
          onClick={onSwap}
        >
          <Typography className={classes.actionButtonText}>
            {loading ? `Swapping` : `Swap`}
          </Typography>
          {loading && (
            <CircularProgress size={10} className={classes.loadingCircle} />
          )}
        </Button>
      </div>
    </div>
  );
}

function AssetSelect({ type, value, assetOptions, onSelect }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredAssetOptions, setFilteredAssetOptions] = useState([]);

  const [manageLocal, setManageLocal] = useState(false);

  const openSearch = () => {
    setSearch("");
    setOpen(true);
  };

  useEffect(() => {
    async function sync() {
      let ao = assetOptions.filter((asset) => {
        if (search && search !== "") {
          return (
            asset.address.toLowerCase().includes(search.toLowerCase()) ||
            asset.symbol.toLowerCase().includes(search.toLowerCase()) ||
            asset.name.toLowerCase().includes(search.toLowerCase())
          );
        } else {
          return true;
        }
      });

      setFilteredAssetOptions(ao);

      //no options in our default list and its an address we search for the address
      if (ao.length === 0 && search && search.length === 42) {
        const baseAsset = await stores.stableSwapStore.getBaseAsset(
          (event.target as HTMLInputElement).value,
          true,
          true
        );
      }
    }
    sync();
    return () => {};
  }, [assetOptions, search]);

  const onSearchChanged = async (event) => {
    setSearch(event.target.value);
  };

  const onLocalSelect = (type, asset) => {
    setSearch("");
    setManageLocal(false);
    setOpen(false);
    onSelect(type, asset);
  };

  const onClose = () => {
    setManageLocal(false);
    setSearch("");
    setOpen(false);
  };

  const toggleLocal = () => {
    setManageLocal(!manageLocal);
  };

  const deleteOption = (token) => {
    stores.stableSwapStore.removeBaseAsset(token);
  };

  const viewOption = (token) => {
    window.open(`${ETHERSCAN_URL}token/${token.address}`, "_blank");
  };

  const renderManageOption = (type, asset, idx) => {
    return (
      <MenuItem
        defaultValue={asset.address}
        key={asset.address + "_" + idx}
        className={classes.assetSelectMenu}
      >
        <div className={classes.assetSelectMenuItem}>
          <div className={classes.displayDualIconContainerSmall}>
            <img
              className={classes.displayAssetIconSmall}
              alt=""
              src={asset ? `${asset.logoURI}` : ""}
              height="60px"
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = "/tokens/unknown-logo.png";
              }}
            />
          </div>
        </div>
        <div className={classes.assetSelectIconName}>
          <Typography variant="h5">{asset ? asset.symbol : ""}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {asset ? asset.name : ""}
          </Typography>
        </div>
        <div className={classes.assetSelectActions}>
          <IconButton
            onClick={() => {
              deleteOption(asset);
            }}
          >
            <DeleteOutline />
          </IconButton>
          <IconButton
            onClick={() => {
              viewOption(asset);
            }}
          >
            ↗
          </IconButton>
        </div>
      </MenuItem>
    );
  };

  const renderAssetOption = (type, asset, idx) => {
    return (
      <MenuItem
        defaultValue={asset.address}
        key={asset.address + "_" + idx}
        className={classes.assetSelectMenu}
        onClick={() => {
          onLocalSelect(type, asset);
        }}
      >
        <div className={classes.assetSelectMenuItem}>
          <div className={classes.displayDualIconContainerSmall}>
            <img
              className={classes.displayAssetIconSmall}
              alt=""
              src={asset ? `${asset.logoURI}` : ""}
              height="60px"
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = "/tokens/unknown-logo.png";
              }}
            />
          </div>
        </div>
        <div className={classes.assetSelectIconName}>
          <Typography variant="h5">{asset ? asset.symbol : ""}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {asset ? asset.name : ""}
          </Typography>
        </div>
        <div className={classes.assetSelectBalance}>
          <Typography variant="h5">
            {asset && asset.balance ? formatCurrency(asset.balance) : "0.00"}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Balance
          </Typography>
        </div>
      </MenuItem>
    );
  };

  const renderManageLocal = () => {
    return (
      <>
        <div className={classes.searchContainer}>
          <div className={classes.searchInline}>
            <TextField
              autoFocus
              variant="outlined"
              fullWidth
              placeholder="CANTO, MIM, 0x..."
              value={search}
              onChange={onSearchChanged}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.assetSearchResults}>
            {filteredAssetOptions
              ? filteredAssetOptions
                  .filter((option) => {
                    return option.local === true;
                  })
                  .map((asset, idx) => {
                    return renderManageOption(type, asset, idx);
                  })
              : []}
          </div>
        </div>
        <div className={classes.manageLocalContainer}>
          <Button onClick={toggleLocal}>Back to Assets</Button>
        </div>
      </>
    );
  };
    // token select 
  const renderOptions = () => {
    return (
      <>
        <div className={classes.searchContainer}>
          <div className={classes.searchInline}>
            <TextField
              autoFocus
              variant="outlined"
              fullWidth
              placeholder="CANTO, MIM, 0x..."
              value={search}
              onChange={onSearchChanged}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.assetSearchResults}>
            {filteredAssetOptions
              ? filteredAssetOptions
                  .sort((a, b) => {
                    if (BigNumber(a.balance).lt(b.balance)) return 1;
                    if (BigNumber(a.balance).gt(b.balance)) return -1;
                    if (a.symbol.toLowerCase() < b.symbol.toLowerCase())
                      return -1;
                    if (a.symbol.toLowerCase() > b.symbol.toLowerCase())
                      return 1;
                    return 0;
                  })
                  .map((asset, idx) => {
                    return renderAssetOption(type, asset, idx);
                  })
              : []}
          </div>
        </div>
        <div className={classes.manageLocalContainer}>
          <Button onClick={toggleLocal}>Manage Local Assets</Button>
        </div>
      </>
    );
  };

  return (
    <React.Fragment>
      <div
        className={classes.displaySelectContainer}
        onClick={() => {
          openSearch();
        }}
      >
        <div className={classes.assetSelectMenuItem}>
          <div className={classes.displayDualIconContainer}>
            <img
              className={classes.displayAssetIcon}
              alt=""
              src={value ? `${value.logoURI}` : ""}
              height="100px"
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src = "/tokens/unknown-logo.png";
              }}
            />
          </div>
        </div>
      </div>
      <Dialog
        onClose={onClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        {!manageLocal && renderOptions()}
        {manageLocal && renderManageLocal()}
      </Dialog>
    </React.Fragment>
  );
}

export default withTheme(Setup);
