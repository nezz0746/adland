import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AdCommonOwnership
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const adCommonOwnershipAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_marketplace', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'beneficiary', internalType: 'address', type: 'address' },
      { name: 'currency', internalType: 'address', type: 'address' },
      { name: 'initialPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
      { name: 'size', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'createAdGroup',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_group', internalType: 'uint256', type: 'uint256' }],
    name: 'getAdGroup',
    outputs: [
      {
        name: '',
        internalType: 'struct AdCommonOwnership.AdGroup',
        type: 'tuple',
        components: [
          { name: 'beneficiary', internalType: 'address', type: 'address' },
          { name: 'startListingId', internalType: 'uint256', type: 'uint256' },
          { name: 'endListingId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_group', internalType: 'uint256', type: 'uint256' }],
    name: 'getAdGroupSize',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'startGroupId', internalType: 'uint256', type: 'uint256' },
      { name: 'endGroupId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAllGroups',
    outputs: [
      {
        name: '',
        internalType: 'struct AdCommonOwnership.AdGroup[]',
        type: 'tuple[]',
        components: [
          { name: 'beneficiary', internalType: 'address', type: 'address' },
          { name: 'startListingId', internalType: 'uint256', type: 'uint256' },
          { name: 'endListingId', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'group',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'listingId', internalType: 'uint256', type: 'uint256' },
      { name: 'uri', internalType: 'string', type: 'string' },
    ],
    name: 'setAdUri',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'group',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'beneficiary',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'size', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'AdGroupCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'uri', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'AdUriSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const adCommonOwnershipAddress = {
  11155111: '0x00F7591b9327945bc30964d8eB26967C270ca687',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const adCommonOwnershipConfig = {
  address: adCommonOwnershipAddress,
  abi: adCommonOwnershipAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DirectListingsLogic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const directListingsLogicAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_nativeTokenWrapper', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: '_msgData',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '_msgSender',
    outputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_buyer', internalType: 'address', type: 'address' },
      { name: '_toApprove', internalType: 'bool', type: 'bool' },
    ],
    name: 'approveBuyerForListing',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_currency', internalType: 'address', type: 'address' },
      {
        name: '_pricePerTokenInCurrency',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'approveCurrencyForListing',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_buyFor', internalType: 'address', type: 'address' },
      { name: '_quantity', internalType: 'uint256', type: 'uint256' },
      { name: '_currency', internalType: 'address', type: 'address' },
      { name: '_expectedTotalPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'buyFromListing',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_listingId', internalType: 'uint256', type: 'uint256' }],
    name: 'cancelListing',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_params',
        internalType: 'struct IDirectListings.ListingParameters',
        type: 'tuple',
        components: [
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'createListing',
    outputs: [{ name: 'listingId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_currency', internalType: 'address', type: 'address' },
    ],
    name: 'currencyPriceForListing',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_startId', internalType: 'uint256', type: 'uint256' },
      { name: '_endId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAllListings',
    outputs: [
      {
        name: '_allListings',
        internalType: 'struct IDirectListings.Listing[]',
        type: 'tuple[]',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'listingCreator', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          {
            name: 'tokenType',
            internalType: 'enum IDirectListings.TokenType',
            type: 'uint8',
          },
          {
            name: 'status',
            internalType: 'enum IDirectListings.Status',
            type: 'uint8',
          },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_startId', internalType: 'uint256', type: 'uint256' },
      { name: '_endId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAllValidListings',
    outputs: [
      {
        name: '_validListings',
        internalType: 'struct IDirectListings.Listing[]',
        type: 'tuple[]',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'listingCreator', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          {
            name: 'tokenType',
            internalType: 'enum IDirectListings.TokenType',
            type: 'uint8',
          },
          {
            name: 'status',
            internalType: 'enum IDirectListings.Status',
            type: 'uint8',
          },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_listingId', internalType: 'uint256', type: 'uint256' }],
    name: 'getListing',
    outputs: [
      {
        name: 'listing',
        internalType: 'struct IDirectListings.Listing',
        type: 'tuple',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'listingCreator', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          {
            name: 'tokenType',
            internalType: 'enum IDirectListings.TokenType',
            type: 'uint8',
          },
          {
            name: 'status',
            internalType: 'enum IDirectListings.Status',
            type: 'uint8',
          },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_buyer', internalType: 'address', type: 'address' },
    ],
    name: 'isBuyerApprovedForListing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      { name: '_currency', internalType: 'address', type: 'address' },
    ],
    name: 'isCurrencyApprovedForListing',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'underlyingToken', internalType: 'address', type: 'address' },
      { name: 'superToken', internalType: 'address', type: 'address' },
    ],
    name: 'setTokenX',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'tokenXs',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalListings',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_listingId', internalType: 'uint256', type: 'uint256' },
      {
        name: '_params',
        internalType: 'struct IDirectListings.ListingParameters',
        type: 'tuple',
        components: [
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'updateListing',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'BuyerApprovedForListing',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingCreator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'CancelledListing',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'currency',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pricePerToken',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CurrencyApprovedForListing',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingCreator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'assetContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listing',
        internalType: 'struct IDirectListings.Listing',
        type: 'tuple',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'listingCreator', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          {
            name: 'tokenType',
            internalType: 'enum IDirectListings.TokenType',
            type: 'uint8',
          },
          {
            name: 'status',
            internalType: 'enum IDirectListings.Status',
            type: 'uint8',
          },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
    ],
    name: 'NewListing',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingCreator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'assetContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'quantityBought',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'totalPricePaid',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NewSale',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'listingCreator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listingId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'assetContract',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'listing',
        internalType: 'struct IDirectListings.Listing',
        type: 'tuple',
        components: [
          { name: 'listingId', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'quantity', internalType: 'uint256', type: 'uint256' },
          { name: 'pricePerToken', internalType: 'uint256', type: 'uint256' },
          { name: 'startTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'endTimestamp', internalType: 'uint128', type: 'uint128' },
          { name: 'listingCreator', internalType: 'address', type: 'address' },
          { name: 'assetContract', internalType: 'address', type: 'address' },
          { name: 'currency', internalType: 'address', type: 'address' },
          { name: 'taxRate', internalType: 'uint256', type: 'uint256' },
          { name: 'taxBeneficiary', internalType: 'address', type: 'address' },
          {
            name: 'tokenType',
            internalType: 'enum IDirectListings.TokenType',
            type: 'uint8',
          },
          {
            name: 'status',
            internalType: 'enum IDirectListings.Status',
            type: 'uint8',
          },
          { name: 'reserved', internalType: 'bool', type: 'bool' },
        ],
        indexed: false,
      },
    ],
    name: 'UpdatedListing',
  },
  {
    type: 'error',
    inputs: [
      { name: 'expected', internalType: 'uint256', type: 'uint256' },
      { name: 'actual', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'CurrencyTransferLibMismatchedValue',
  },
] as const

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const directListingsLogicAddress = {
  1337: '0x998abeb3E57409262aE5b751f60747921B33613E',
  11155111: '0x07De07C19723162FDB299736A32F40941867582f',
} as const

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const directListingsLogicConfig = {
  address: directListingsLogicAddress,
  abi: directListingsLogicAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'spender', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    inputs: [
      { name: 'owner', type: 'address', indexed: true },
      { name: 'operator', type: 'address', indexed: true },
      { name: 'approved', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    inputs: [
      { name: 'from', type: 'address', indexed: true },
      { name: 'to', type: 'address', indexed: true },
      { name: 'tokenId', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'operator', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'tokenId', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', type: 'address' },
      { name: 'to', type: 'address' },
      { name: 'id', type: 'uint256' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', type: 'address' },
      { name: 'approved', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'index', type: 'uint256' },
    ],
    name: 'tokenByIndex',
    outputs: [{ name: 'tokenId', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'recipient', type: 'address' },
      { name: 'tokeId', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnership = /*#__PURE__*/ createUseReadContract({
  abi: adCommonOwnershipAbi,
  address: adCommonOwnershipAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"getAdGroup"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipGetAdGroup =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'getAdGroup',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"getAdGroupSize"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipGetAdGroupSize =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'getAdGroupSize',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"getAllGroups"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipGetAllGroups =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'getAllGroups',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"getApproved"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"group"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipGroup =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'group',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipName = /*#__PURE__*/ createUseReadContract(
  {
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'name',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"ownerOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"tokenURI"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useReadAdCommonOwnershipTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteAdCommonOwnership = /*#__PURE__*/ createUseWriteContract({
  abi: adCommonOwnershipAbi,
  address: adCommonOwnershipAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteAdCommonOwnershipApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"createAdGroup"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteAdCommonOwnershipCreateAdGroup =
  /*#__PURE__*/ createUseWriteContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'createAdGroup',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteAdCommonOwnershipSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"setAdUri"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteAdCommonOwnershipSetAdUri =
  /*#__PURE__*/ createUseWriteContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'setAdUri',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteAdCommonOwnershipSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWriteAdCommonOwnershipTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateAdCommonOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateAdCommonOwnershipApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"createAdGroup"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateAdCommonOwnershipCreateAdGroup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'createAdGroup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateAdCommonOwnershipSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"setAdUri"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateAdCommonOwnershipSetAdUri =
  /*#__PURE__*/ createUseSimulateContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'setAdUri',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateAdCommonOwnershipSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useSimulateAdCommonOwnershipTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link adCommonOwnershipAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchAdCommonOwnershipEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `eventName` set to `"AdGroupCreated"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchAdCommonOwnershipAdGroupCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    eventName: 'AdGroupCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `eventName` set to `"AdUriSet"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchAdCommonOwnershipAdUriSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    eventName: 'AdUriSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchAdCommonOwnershipApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchAdCommonOwnershipApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x00F7591b9327945bc30964d8eB26967C270ca687)
 */
export const useWatchAdCommonOwnershipTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useReadDirectListingsLogic = /*#__PURE__*/ createUseReadContract({
  abi: directListingsLogicAbi,
  address: directListingsLogicAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"_msgData"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useReadDirectListingsLogicMsgData =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: '_msgData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"_msgSender"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useReadDirectListingsLogicMsgSender =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: '_msgSender',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"currencyPriceForListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useReadDirectListingsLogicCurrencyPriceForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'currencyPriceForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"getAllListings"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useReadDirectListingsLogicGetAllListings =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'getAllListings',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"getAllValidListings"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useReadDirectListingsLogicGetAllValidListings =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'getAllValidListings',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"getListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useReadDirectListingsLogicGetListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'getListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"isBuyerApprovedForListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useReadDirectListingsLogicIsBuyerApprovedForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'isBuyerApprovedForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"isCurrencyApprovedForListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useReadDirectListingsLogicIsCurrencyApprovedForListing =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'isCurrencyApprovedForListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"tokenXs"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useReadDirectListingsLogicTokenXs =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'tokenXs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"totalListings"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useReadDirectListingsLogicTotalListings =
  /*#__PURE__*/ createUseReadContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'totalListings',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWriteDirectListingsLogic = /*#__PURE__*/ createUseWriteContract(
  { abi: directListingsLogicAbi, address: directListingsLogicAddress },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveBuyerForListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWriteDirectListingsLogicApproveBuyerForListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'approveBuyerForListing',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveCurrencyForListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWriteDirectListingsLogicApproveCurrencyForListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'approveCurrencyForListing',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"buyFromListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWriteDirectListingsLogicBuyFromListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'buyFromListing',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"cancelListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWriteDirectListingsLogicCancelListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'cancelListing',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"createListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWriteDirectListingsLogicCreateListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'createListing',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"setTokenX"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWriteDirectListingsLogicSetTokenX =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'setTokenX',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"updateListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWriteDirectListingsLogicUpdateListing =
  /*#__PURE__*/ createUseWriteContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'updateListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useSimulateDirectListingsLogic =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveBuyerForListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useSimulateDirectListingsLogicApproveBuyerForListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'approveBuyerForListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveCurrencyForListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useSimulateDirectListingsLogicApproveCurrencyForListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'approveCurrencyForListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"buyFromListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useSimulateDirectListingsLogicBuyFromListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'buyFromListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"cancelListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useSimulateDirectListingsLogicCancelListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'cancelListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"createListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useSimulateDirectListingsLogicCreateListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'createListing',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"setTokenX"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useSimulateDirectListingsLogicSetTokenX =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'setTokenX',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"updateListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useSimulateDirectListingsLogicUpdateListing =
  /*#__PURE__*/ createUseSimulateContract({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    functionName: 'updateListing',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWatchDirectListingsLogicEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"BuyerApprovedForListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWatchDirectListingsLogicBuyerApprovedForListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'BuyerApprovedForListing',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"CancelledListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWatchDirectListingsLogicCancelledListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'CancelledListing',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"CurrencyApprovedForListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWatchDirectListingsLogicCurrencyApprovedForListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'CurrencyApprovedForListing',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"NewListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWatchDirectListingsLogicNewListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'NewListing',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"NewSale"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWatchDirectListingsLogicNewSaleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'NewSale',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link directListingsLogicAbi}__ and `eventName` set to `"UpdatedListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x07De07C19723162FDB299736A32F40941867582f)
 */
export const useWatchDirectListingsLogicUpdatedListingEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: directListingsLogicAbi,
    address: directListingsLogicAddress,
    eventName: 'UpdatedListing',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useReadErc721 = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadErc721BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const useReadErc721GetApproved = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadErc721IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: erc721Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"name"`
 */
export const useReadErc721Name = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadErc721OwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"symbol"`
 */
export const useReadErc721Symbol = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenByIndex"`
 */
export const useReadErc721TokenByIndex = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenByIndex',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadErc721TokenUri = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadErc721TotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: erc721Abi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWriteErc721 = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useWriteErc721Approve = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteErc721SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteErc721SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteErc721TransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: erc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__
 */
export const useSimulateErc721 = /*#__PURE__*/ createUseSimulateContract({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"approve"`
 */
export const useSimulateErc721Approve = /*#__PURE__*/ createUseSimulateContract(
  { abi: erc721Abi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateErc721SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateErc721SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link erc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateErc721TransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: erc721Abi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__
 */
export const useWatchErc721Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: erc721Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Approval"`
 */
export const useWatchErc721ApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchErc721ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchErc721TransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc721Abi,
    eventName: 'Transfer',
  })
