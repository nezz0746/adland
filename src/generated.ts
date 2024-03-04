import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from "wagmi/codegen";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DirectListingsLogic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const directListingsLogicAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_nativeTokenWrapper", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "_msgData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "_msgSender",
    outputs: [{ name: "sender", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_listingId", internalType: "uint256", type: "uint256" },
      { name: "_buyer", internalType: "address", type: "address" },
      { name: "_toApprove", internalType: "bool", type: "bool" },
    ],
    name: "approveBuyerForListing",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_listingId", internalType: "uint256", type: "uint256" },
      { name: "_currency", internalType: "address", type: "address" },
      {
        name: "_pricePerTokenInCurrency",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "approveCurrencyForListing",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_listingId", internalType: "uint256", type: "uint256" },
      { name: "_buyFor", internalType: "address", type: "address" },
      { name: "_quantity", internalType: "uint256", type: "uint256" },
      { name: "_currency", internalType: "address", type: "address" },
      { name: "_expectedTotalPrice", internalType: "uint256", type: "uint256" },
    ],
    name: "buyFromListing",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "_listingId", internalType: "uint256", type: "uint256" }],
    name: "cancelListing",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "_params",
        internalType: "struct IDirectListings.ListingParameters",
        type: "tuple",
        components: [
          { name: "assetContract", internalType: "address", type: "address" },
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "quantity", internalType: "uint256", type: "uint256" },
          { name: "currency", internalType: "address", type: "address" },
          { name: "pricePerToken", internalType: "uint256", type: "uint256" },
          { name: "startTimestamp", internalType: "uint128", type: "uint128" },
          { name: "endTimestamp", internalType: "uint128", type: "uint128" },
          { name: "reserved", internalType: "bool", type: "bool" },
        ],
      },
    ],
    name: "createListing",
    outputs: [{ name: "listingId", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "_listingId", internalType: "uint256", type: "uint256" },
      { name: "_currency", internalType: "address", type: "address" },
    ],
    name: "currencyPriceForListing",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_startId", internalType: "uint256", type: "uint256" },
      { name: "_endId", internalType: "uint256", type: "uint256" },
    ],
    name: "getAllListings",
    outputs: [
      {
        name: "_allListings",
        internalType: "struct IDirectListings.Listing[]",
        type: "tuple[]",
        components: [
          { name: "listingId", internalType: "uint256", type: "uint256" },
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "quantity", internalType: "uint256", type: "uint256" },
          { name: "pricePerToken", internalType: "uint256", type: "uint256" },
          { name: "startTimestamp", internalType: "uint128", type: "uint128" },
          { name: "endTimestamp", internalType: "uint128", type: "uint128" },
          { name: "listingCreator", internalType: "address", type: "address" },
          { name: "assetContract", internalType: "address", type: "address" },
          { name: "currency", internalType: "address", type: "address" },
          {
            name: "tokenType",
            internalType: "enum IDirectListings.TokenType",
            type: "uint8",
          },
          {
            name: "status",
            internalType: "enum IDirectListings.Status",
            type: "uint8",
          },
          { name: "reserved", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_startId", internalType: "uint256", type: "uint256" },
      { name: "_endId", internalType: "uint256", type: "uint256" },
    ],
    name: "getAllValidListings",
    outputs: [
      {
        name: "_validListings",
        internalType: "struct IDirectListings.Listing[]",
        type: "tuple[]",
        components: [
          { name: "listingId", internalType: "uint256", type: "uint256" },
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "quantity", internalType: "uint256", type: "uint256" },
          { name: "pricePerToken", internalType: "uint256", type: "uint256" },
          { name: "startTimestamp", internalType: "uint128", type: "uint128" },
          { name: "endTimestamp", internalType: "uint128", type: "uint128" },
          { name: "listingCreator", internalType: "address", type: "address" },
          { name: "assetContract", internalType: "address", type: "address" },
          { name: "currency", internalType: "address", type: "address" },
          {
            name: "tokenType",
            internalType: "enum IDirectListings.TokenType",
            type: "uint8",
          },
          {
            name: "status",
            internalType: "enum IDirectListings.Status",
            type: "uint8",
          },
          { name: "reserved", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_listingId", internalType: "uint256", type: "uint256" }],
    name: "getListing",
    outputs: [
      {
        name: "listing",
        internalType: "struct IDirectListings.Listing",
        type: "tuple",
        components: [
          { name: "listingId", internalType: "uint256", type: "uint256" },
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "quantity", internalType: "uint256", type: "uint256" },
          { name: "pricePerToken", internalType: "uint256", type: "uint256" },
          { name: "startTimestamp", internalType: "uint128", type: "uint128" },
          { name: "endTimestamp", internalType: "uint128", type: "uint128" },
          { name: "listingCreator", internalType: "address", type: "address" },
          { name: "assetContract", internalType: "address", type: "address" },
          { name: "currency", internalType: "address", type: "address" },
          {
            name: "tokenType",
            internalType: "enum IDirectListings.TokenType",
            type: "uint8",
          },
          {
            name: "status",
            internalType: "enum IDirectListings.Status",
            type: "uint8",
          },
          { name: "reserved", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_listingId", internalType: "uint256", type: "uint256" },
      { name: "_buyer", internalType: "address", type: "address" },
    ],
    name: "isBuyerApprovedForListing",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_listingId", internalType: "uint256", type: "uint256" },
      { name: "_currency", internalType: "address", type: "address" },
    ],
    name: "isCurrencyApprovedForListing",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalListings",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_listingId", internalType: "uint256", type: "uint256" },
      {
        name: "_params",
        internalType: "struct IDirectListings.ListingParameters",
        type: "tuple",
        components: [
          { name: "assetContract", internalType: "address", type: "address" },
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "quantity", internalType: "uint256", type: "uint256" },
          { name: "currency", internalType: "address", type: "address" },
          { name: "pricePerToken", internalType: "uint256", type: "uint256" },
          { name: "startTimestamp", internalType: "uint128", type: "uint128" },
          { name: "endTimestamp", internalType: "uint128", type: "uint128" },
          { name: "reserved", internalType: "bool", type: "bool" },
        ],
      },
    ],
    name: "updateListing",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "listingId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "buyer",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "BuyerApprovedForListing",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "listingCreator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "listingId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "CancelledListing",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "listingId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "currency",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "pricePerToken",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "CurrencyApprovedForListing",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "listingCreator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "listingId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "assetContract",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "listing",
        internalType: "struct IDirectListings.Listing",
        type: "tuple",
        components: [
          { name: "listingId", internalType: "uint256", type: "uint256" },
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "quantity", internalType: "uint256", type: "uint256" },
          { name: "pricePerToken", internalType: "uint256", type: "uint256" },
          { name: "startTimestamp", internalType: "uint128", type: "uint128" },
          { name: "endTimestamp", internalType: "uint128", type: "uint128" },
          { name: "listingCreator", internalType: "address", type: "address" },
          { name: "assetContract", internalType: "address", type: "address" },
          { name: "currency", internalType: "address", type: "address" },
          {
            name: "tokenType",
            internalType: "enum IDirectListings.TokenType",
            type: "uint8",
          },
          {
            name: "status",
            internalType: "enum IDirectListings.Status",
            type: "uint8",
          },
          { name: "reserved", internalType: "bool", type: "bool" },
        ],
        indexed: false,
      },
    ],
    name: "NewListing",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "listingCreator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "listingId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "assetContract",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "buyer",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "quantityBought",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "totalPricePaid",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "NewSale",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "listingCreator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "listingId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "assetContract",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "listing",
        internalType: "struct IDirectListings.Listing",
        type: "tuple",
        components: [
          { name: "listingId", internalType: "uint256", type: "uint256" },
          { name: "tokenId", internalType: "uint256", type: "uint256" },
          { name: "quantity", internalType: "uint256", type: "uint256" },
          { name: "pricePerToken", internalType: "uint256", type: "uint256" },
          { name: "startTimestamp", internalType: "uint128", type: "uint128" },
          { name: "endTimestamp", internalType: "uint128", type: "uint128" },
          { name: "listingCreator", internalType: "address", type: "address" },
          { name: "assetContract", internalType: "address", type: "address" },
          { name: "currency", internalType: "address", type: "address" },
          {
            name: "tokenType",
            internalType: "enum IDirectListings.TokenType",
            type: "uint8",
          },
          {
            name: "status",
            internalType: "enum IDirectListings.Status",
            type: "uint8",
          },
          { name: "reserved", internalType: "bool", type: "bool" },
        ],
        indexed: false,
      },
    ],
    name: "UpdatedListing",
  },
  {
    type: "error",
    inputs: [
      { name: "expected", internalType: "uint256", type: "uint256" },
      { name: "actual", internalType: "uint256", type: "uint256" },
    ],
    name: "CurrencyTransferLibMismatchedValue",
  },
] as const;

/**
 *
 */
export const directListingsLogicAddress = {
  1337: "0x998abeb3E57409262aE5b751f60747921B33613E",
} as const;

/**
 *
 */
export const directListingsLogicConfig = {
  address: directListingsLogicAddress,
  abi: directListingsLogicAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 *
 */
export const useReadDirectListingsLogic = /*#__PURE__*/ createUseReadContract({
  abi: directListingsLogicAbi,
  address: directListingsLogicAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"_msgData"`
 *
 *
 */
export const useReadDirectListingsLogicMsgData =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "_msgData",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"_msgSender"`
 *
 *
 */
export const useReadDirectListingsLogicMsgSender =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "_msgSender",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"currencyPriceForListing"`
 *
 *
 */
export const useReadDirectListingsLogicCurrencyPriceForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "currencyPriceForListing",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"getAllListings"`
 *
 *
 */
export const useReadDirectListingsLogicGetAllListings =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "getAllListings",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"getAllValidListings"`
 *
 *
 */
export const useReadDirectListingsLogicGetAllValidListings =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "getAllValidListings",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"getListing"`
 *
 *
 */
export const useReadDirectListingsLogicGetListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "getListing",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"isBuyerApprovedForListing"`
 *
 *
 */
export const useReadDirectListingsLogicIsBuyerApprovedForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "isBuyerApprovedForListing",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"isCurrencyApprovedForListing"`
 *
 *
 */
export const useReadDirectListingsLogicIsCurrencyApprovedForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "isCurrencyApprovedForListing",
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"totalListings"`
 *
 *
 */
export const useReadDirectListingsLogicTotalListings =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "totalListings",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 *
 */
export const useWriteDirectListingsLogic = /*#__PURE__*/ createUseWriteContract(
  { abi: directListingsLogicAbi, address: directListingsLogicAddress }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveBuyerForListing"`
 *
 *
 */
export const useWriteDirectListingsLogicApproveBuyerForListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "approveBuyerForListing",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveCurrencyForListing"`
 *
 *
 */
export const useWriteDirectListingsLogicApproveCurrencyForListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "approveCurrencyForListing",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"buyFromListing"`
 *
 *
 */
export const useWriteDirectListingsLogicBuyFromListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "buyFromListing",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"cancelListing"`
 *
 *
 */
export const useWriteDirectListingsLogicCancelListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "cancelListing",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"createListing"`
 *
 *
 */
export const useWriteDirectListingsLogicCreateListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "createListing",
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"updateListing"`
 *
 *
 */
export const useWriteDirectListingsLogicUpdateListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "updateListing",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 *
 */
export const useSimulateDirectListingsLogic =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveBuyerForListing"`
 *
 *
 */
export const useSimulateDirectListingsLogicApproveBuyerForListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "approveBuyerForListing",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveCurrencyForListing"`
 *
 *
 */
export const useSimulateDirectListingsLogicApproveCurrencyForListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "approveCurrencyForListing",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"buyFromListing"`
 *
 *
 */
export const useSimulateDirectListingsLogicBuyFromListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "buyFromListing",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"cancelListing"`
 *
 *
 */
export const useSimulateDirectListingsLogicCancelListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "cancelListing",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"createListing"`
 *
 *
 */
export const useSimulateDirectListingsLogicCreateListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "createListing",
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"updateListing"`
 *
 *
 */
export const useSimulateDirectListingsLogicUpdateListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: "updateListing",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 *
 */
export const useWatchDirectListingsLogicEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"BuyerApprovedForListing"`
 *
 *
 */
export const useWatchDirectListingsLogicBuyerApprovedForListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: "BuyerApprovedForListing",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"CancelledListing"`
 *
 *
 */
export const useWatchDirectListingsLogicCancelledListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: "CancelledListing",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"CurrencyApprovedForListing"`
 *
 *
 */
export const useWatchDirectListingsLogicCurrencyApprovedForListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: "CurrencyApprovedForListing",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"NewListing"`
 *
 *
 */
export const useWatchDirectListingsLogicNewListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: "NewListing",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"NewSale"`
 *
 *
 */
export const useWatchDirectListingsLogicNewSaleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: "NewSale",
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"UpdatedListing"`
 *
 *
 */
export const useWatchDirectListingsLogicUpdatedListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: "UpdatedListing",
  });
