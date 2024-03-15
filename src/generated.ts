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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const adCommonOwnershipAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_marketplace', internalType: 'address', type: 'address' },
      { name: '_placeholderURI', internalType: 'string', type: 'string' },
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
    inputs: [{ name: 'listingId', internalType: 'uint256', type: 'uint256' }],
    name: 'getAd',
    outputs: [
      {
        name: '',
        internalType: 'struct AdCommonOwnership.Ad',
        type: 'tuple',
        components: [{ name: 'uri', internalType: 'string', type: 'string' }],
      },
    ],
    stateMutability: 'view',
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
    inputs: [],
    name: 'placeholderURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'salePrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'royaltyInfo',
    outputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
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
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const adCommonOwnershipAddress = {
  11155111: '0xdbaFE3fA286661610765CEFc4279E6272E833F77',
  11155420: '0xecFD93DE18f6E52F6Bf72579884078592002eA79',
} as const

/**
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const adCommonOwnershipConfig = {
  address: adCommonOwnershipAddress,
  abi: adCommonOwnershipAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CFAv1Forwarder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const cfAv1ForwarderAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'createFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'deleteFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowInfo',
    outputs: [
      { name: 'lastUpdated', internalType: 'uint256', type: 'uint256' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
    ],
    name: 'getAccountFlowrate',
    outputs: [{ name: 'flowrate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'getBufferAmountByFlowrate',
    outputs: [
      { name: 'bufferAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowInfo',
    outputs: [
      { name: 'lastUpdated', internalType: 'uint256', type: 'uint256' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowOperatorPermissions',
    outputs: [
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowrateAllowance', internalType: 'int96', type: 'int96' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'getFlowrate',
    outputs: [{ name: 'flowrate', internalType: 'int96', type: 'int96' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'grantPermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
    ],
    name: 'revokePermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'setFlowrate',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
    ],
    name: 'setFlowrateFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'receiver', internalType: 'address', type: 'address' },
      { name: 'flowrate', internalType: 'int96', type: 'int96' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'updateFlow',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract ISuperToken', type: 'address' },
      { name: 'flowOperator', internalType: 'address', type: 'address' },
      { name: 'permissions', internalType: 'uint8', type: 'uint8' },
      { name: 'flowrateAllowance', internalType: 'int96', type: 'int96' },
    ],
    name: 'updateFlowOperatorPermissions',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CFA_FWD_INVALID_FLOW_RATE' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DirectListingsLogic
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
          { name: 'listingOwner', internalType: 'address', type: 'address' },
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
          { name: 'listingOwner', internalType: 'address', type: 'address' },
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
          { name: 'listingOwner', internalType: 'address', type: 'address' },
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
          { name: 'listingOwner', internalType: 'address', type: 'address' },
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
          { name: 'listingOwner', internalType: 'address', type: 'address' },
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
 */
export const directListingsLogicAddress = {
  1337: '0x998abeb3E57409262aE5b751f60747921B33613E',
  11155111: '0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94',
  11155420: '0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9',
} as const

/**
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
// ISETH
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const isethAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'CONSTANT_INFLOW_NFT',
    outputs: [
      {
        name: '',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CONSTANT_OUTFLOW_NFT',
    outputs: [
      {
        name: '',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_ADMIN_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolAdminNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_MEMBER_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolMemberNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'createAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'defaultOperators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'downgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'downgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'wad', internalType: 'uint256', type: 'uint256' }],
    name: 'downgradeToETH',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getAccountActiveAgreements',
    outputs: [
      {
        name: 'activeAgreements',
        internalType: 'contract ISuperAgreement[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAdmin',
    outputs: [{ name: 'admin', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementData',
    outputs: [{ name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementStateSlot',
    outputs: [
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getHost',
    outputs: [{ name: 'host', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getUnderlyingDecimals',
    outputs: [
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getUnderlyingToken',
    outputs: [{ name: 'tokenAddr', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'granularity',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
      { name: 'admin', internalType: 'address', type: 'address' },
    ],
    name: 'initializeWithAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountCritical',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountCriticalNow',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountSolvent',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountSolventNow',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenHolder', internalType: 'address', type: 'address' },
    ],
    name: 'isOperatorFor',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'liquidationTypeData', internalType: 'bytes', type: 'bytes' },
      { name: 'liquidatorAccount', internalType: 'address', type: 'address' },
      { name: 'useDefaultRewardAccount', internalType: 'bool', type: 'bool' },
      { name: 'targetAccount', internalType: 'address', type: 'address' },
      { name: 'rewardAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
      },
    ],
    name: 'makeLiquidationPayoutsV2',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationApprove',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDecreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDowngrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationIncreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operationSend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationUpgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorSend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'realtimeBalanceOfNow',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfApproveFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'send',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'delta', internalType: 'int256', type: 'int256' },
    ],
    name: 'settleBalance',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'terminateAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'toUnderlyingAmount',
    outputs: [
      { name: 'underlyingAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'adjustedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'transferAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementStateSlot',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'upgradeByETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'upgradeByETHTo',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bondAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedBy',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'targetAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmountReceiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'liquidationTypeData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedV2',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'slotId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementStateUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'AgreementTerminated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementUpdated',
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
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AuthorizedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'bailoutAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Bailout',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Burned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'constantInflowNFT',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ConstantInflowNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'constantOutflowNFT',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ConstantOutflowNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Minted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolAdminNFT',
        internalType: 'contract IPoolAdminNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PoolAdminNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolMemberNFT',
        internalType: 'contract IPoolMemberNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PoolMemberNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RevokedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Sent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenDowngraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_BURN_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_MOVE_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_BURN_FROM_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_CALLER_IS_NOT_OPERATOR_FOR_HOLDER',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_INFLATIONARY_DEFLATIONARY_NOT_SUPPORTED',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_MINT_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NFT_PROXY_ADDRESS_CHANGED' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_NOT_ERC777_TOKENS_RECIPIENT',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NO_UNDERLYING_TOKEN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_ADMIN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_GOV_OWNER' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_SELF' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_TO_ZERO_ADDRESS' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISETHCustom
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const isethCustomAbi = [
  {
    type: 'function',
    inputs: [{ name: 'wad', internalType: 'uint256', type: 'uint256' }],
    name: 'downgradeToETH',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'upgradeByETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'to', internalType: 'address', type: 'address' }],
    name: 'upgradeByETHTo',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SuperToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const superTokenAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'host', internalType: 'contract ISuperfluid', type: 'address' },
      {
        name: 'constantOutflowNFT',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
      },
      {
        name: 'constantInflowNFT',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
      },
      {
        name: 'poolAdminNFT',
        internalType: 'contract IPoolAdminNFT',
        type: 'address',
      },
      {
        name: 'poolMemberNFT',
        internalType: 'contract IPoolMemberNFT',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CONSTANT_INFLOW_NFT',
    outputs: [
      {
        name: '',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CONSTANT_OUTFLOW_NFT',
    outputs: [
      {
        name: '',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_ADMIN_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolAdminNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'POOL_MEMBER_NFT',
    outputs: [
      { name: '', internalType: 'contract IPoolMemberNFT', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'castrate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'changeAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'createAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'defaultOperators',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'downgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'downgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getAccountActiveAgreements',
    outputs: [
      {
        name: '',
        internalType: 'contract ISuperAgreement[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementData',
    outputs: [{ name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'agreementClass', internalType: 'address', type: 'address' },
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getAgreementStateSlot',
    outputs: [
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCodeAddress',
    outputs: [
      { name: 'codeAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getHost',
    outputs: [{ name: 'host', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getUnderlyingDecimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getUnderlyingToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'granularity',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'underlyingToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'underlyingDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'n', internalType: 'string', type: 'string' },
      { name: 's', internalType: 'string', type: 'string' },
      { name: 'admin', internalType: 'address', type: 'address' },
    ],
    name: 'initializeWithAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountCritical',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountCriticalNow',
    outputs: [{ name: 'isCritical', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isAccountSolvent',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isAccountSolventNow',
    outputs: [{ name: 'isSolvent', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenHolder', internalType: 'address', type: 'address' },
    ],
    name: 'isOperatorFor',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'liquidationTypeData', internalType: 'bytes', type: 'bytes' },
      { name: 'liquidatorAccount', internalType: 'address', type: 'address' },
      { name: 'useDefaultRewardAccount', internalType: 'bool', type: 'bool' },
      { name: 'targetAccount', internalType: 'address', type: 'address' },
      { name: 'rewardAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
      },
    ],
    name: 'makeLiquidationPayoutsV2',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationApprove',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDecreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationDowngrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationIncreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operationSend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'operationUpgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
      { name: 'operatorData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'operatorSend',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'realtimeBalanceOf',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'realtimeBalanceOfNow',
    outputs: [
      { name: 'availableBalance', internalType: 'int256', type: 'int256' },
      { name: 'deposit', internalType: 'uint256', type: 'uint256' },
      { name: 'owedDeposit', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfApproveFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'selfMint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'holder', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'selfTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'send',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'delta', internalType: 'int256', type: 'int256' },
    ],
    name: 'settleBalance',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'terminateAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'toUnderlyingAmount',
    outputs: [
      { name: 'underlyingAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'adjustedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'recipient', internalType: 'address', type: 'address' }],
    name: 'transferAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'holder', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'id', internalType: 'bytes32', type: 'bytes32' },
      { name: 'data', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'slotId', internalType: 'uint256', type: 'uint256' },
      { name: 'slotData', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'updateAgreementStateSlot',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAddress', internalType: 'address', type: 'address' }],
    name: 'updateCode',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'userData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'penaltyAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bondAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedBy',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'liquidatorAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'targetAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'rewardAmountReceiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'targetAccountBalanceDelta',
        internalType: 'int256',
        type: 'int256',
        indexed: false,
      },
      {
        name: 'liquidationTypeData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'AgreementLiquidatedV2',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'slotId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AgreementStateUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'AgreementTerminated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'agreementClass',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'id', internalType: 'bytes32', type: 'bytes32', indexed: false },
      {
        name: 'data',
        internalType: 'bytes32[]',
        type: 'bytes32[]',
        indexed: false,
      },
    ],
    name: 'AgreementUpdated',
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
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AuthorizedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'bailoutAccount',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'bailoutAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Bailout',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Burned',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'uuid',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'codeAddress',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CodeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'constantInflowNFT',
        internalType: 'contract IConstantInflowNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ConstantInflowNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'constantOutflowNFT',
        internalType: 'contract IConstantOutflowNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'ConstantOutflowNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Minted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolAdminNFT',
        internalType: 'contract IPoolAdminNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PoolAdminNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolMemberNFT',
        internalType: 'contract IPoolMemberNFT',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PoolMemberNFTCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenHolder',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RevokedOperator',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
      {
        name: 'operatorData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'Sent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenDowngraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TokenUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_ALREADY_EXISTS' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_AGREEMENT_DOES_NOT_EXIST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_BURN_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_MOVE_INSUFFICIENT_BALANCE' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_HOST' },
  { type: 'error', inputs: [], name: 'SF_TOKEN_ONLY_LISTED_AGREEMENT' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_APPROVE_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_BURN_FROM_ZERO_ADDRESS' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_CALLER_IS_NOT_OPERATOR_FOR_HOLDER',
  },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_INFLATIONARY_DEFLATIONARY_NOT_SUPPORTED',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_MINT_TO_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NFT_PROXY_ADDRESS_CHANGED' },
  {
    type: 'error',
    inputs: [],
    name: 'SUPER_TOKEN_NOT_ERC777_TOKENS_RECIPIENT',
  },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_NO_UNDERLYING_TOKEN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_ADMIN' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_GOV_OWNER' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_ONLY_SELF' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_FROM_ZERO_ADDRESS' },
  { type: 'error', inputs: [], name: 'SUPER_TOKEN_TRANSFER_TO_ZERO_ADDRESS' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__
 *
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const useReadAdCommonOwnership = /*#__PURE__*/ createUseReadContract({
  abi: adCommonOwnershipAbi,
  address: adCommonOwnershipAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const useReadAdCommonOwnershipBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"getAd"`
 *
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const useReadAdCommonOwnershipGetAd =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'getAd',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"getAdGroup"`
 *
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const useReadAdCommonOwnershipOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"placeholderURI"`
 *
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const useReadAdCommonOwnershipPlaceholderUri =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'placeholderURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"royaltyInfo"`
 *
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const useReadAdCommonOwnershipRoyaltyInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    functionName: 'royaltyInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const useWriteAdCommonOwnership = /*#__PURE__*/ createUseWriteContract({
  abi: adCommonOwnershipAbi,
  address: adCommonOwnershipAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const useSimulateAdCommonOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const useWatchAdCommonOwnershipEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link adCommonOwnershipAbi}__ and `eventName` set to `"AdGroupCreated"`
 *
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xdbaFE3fA286661610765CEFc4279E6272E833F77)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xecFD93DE18f6E52F6Bf72579884078592002eA79)
 */
export const useWatchAdCommonOwnershipTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: adCommonOwnershipAbi,
    address: adCommonOwnershipAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__
 */
export const useReadCfAv1Forwarder = /*#__PURE__*/ createUseReadContract({
  abi: cfAv1ForwarderAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getAccountFlowInfo"`
 */
export const useReadCfAv1ForwarderGetAccountFlowInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getAccountFlowInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getAccountFlowrate"`
 */
export const useReadCfAv1ForwarderGetAccountFlowrate =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getAccountFlowrate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getBufferAmountByFlowrate"`
 */
export const useReadCfAv1ForwarderGetBufferAmountByFlowrate =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getBufferAmountByFlowrate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getFlowInfo"`
 */
export const useReadCfAv1ForwarderGetFlowInfo =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getFlowInfo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getFlowOperatorPermissions"`
 */
export const useReadCfAv1ForwarderGetFlowOperatorPermissions =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getFlowOperatorPermissions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"getFlowrate"`
 */
export const useReadCfAv1ForwarderGetFlowrate =
  /*#__PURE__*/ createUseReadContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'getFlowrate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__
 */
export const useWriteCfAv1Forwarder = /*#__PURE__*/ createUseWriteContract({
  abi: cfAv1ForwarderAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"createFlow"`
 */
export const useWriteCfAv1ForwarderCreateFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'createFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"deleteFlow"`
 */
export const useWriteCfAv1ForwarderDeleteFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'deleteFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"grantPermissions"`
 */
export const useWriteCfAv1ForwarderGrantPermissions =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'grantPermissions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"revokePermissions"`
 */
export const useWriteCfAv1ForwarderRevokePermissions =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'revokePermissions',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"setFlowrate"`
 */
export const useWriteCfAv1ForwarderSetFlowrate =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'setFlowrate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"setFlowrateFrom"`
 */
export const useWriteCfAv1ForwarderSetFlowrateFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'setFlowrateFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"updateFlow"`
 */
export const useWriteCfAv1ForwarderUpdateFlow =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'updateFlow',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 */
export const useWriteCfAv1ForwarderUpdateFlowOperatorPermissions =
  /*#__PURE__*/ createUseWriteContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__
 */
export const useSimulateCfAv1Forwarder =
  /*#__PURE__*/ createUseSimulateContract({ abi: cfAv1ForwarderAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"createFlow"`
 */
export const useSimulateCfAv1ForwarderCreateFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'createFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"deleteFlow"`
 */
export const useSimulateCfAv1ForwarderDeleteFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'deleteFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"grantPermissions"`
 */
export const useSimulateCfAv1ForwarderGrantPermissions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'grantPermissions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"revokePermissions"`
 */
export const useSimulateCfAv1ForwarderRevokePermissions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'revokePermissions',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"setFlowrate"`
 */
export const useSimulateCfAv1ForwarderSetFlowrate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'setFlowrate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"setFlowrateFrom"`
 */
export const useSimulateCfAv1ForwarderSetFlowrateFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'setFlowrateFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"updateFlow"`
 */
export const useSimulateCfAv1ForwarderUpdateFlow =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'updateFlow',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link cfAv1ForwarderAbi}__ and `functionName` set to `"updateFlowOperatorPermissions"`
 */
export const useSimulateCfAv1ForwarderUpdateFlowOperatorPermissions =
  /*#__PURE__*/ createUseSimulateContract({
    abi: cfAv1ForwarderAbi,
    functionName: 'updateFlowOperatorPermissions',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
 */
export const useReadDirectListingsLogic = /*#__PURE__*/ createUseReadContract({
  abi: directListingsLogicAbi,
  address: directListingsLogicAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"_msgData"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
 */
export const useWriteDirectListingsLogic = /*#__PURE__*/ createUseWriteContract(
  { abi: directListingsLogicAbi, address: directListingsLogicAddress },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link directListingsLogicAbi}__ and `functionName` set to `"approveBuyerForListing"`
 *
 * -
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xcCFF64eEff05Bb1F7e80Fe965A5E57ed588FBF94)
 * - [__View Contract on Op Sepolia Blockscout__](https://optimism-sepolia.blockscout.com/address/0xeaF1ed9d91483338d5C8D29179De5F16a337EdE9)
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

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__
 */
export const useReadIseth = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"CONSTANT_INFLOW_NFT"`
 */
export const useReadIsethConstantInflowNft =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'CONSTANT_INFLOW_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"CONSTANT_OUTFLOW_NFT"`
 */
export const useReadIsethConstantOutflowNft =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'CONSTANT_OUTFLOW_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"POOL_ADMIN_NFT"`
 */
export const useReadIsethPoolAdminNft = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'POOL_ADMIN_NFT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"POOL_MEMBER_NFT"`
 */
export const useReadIsethPoolMemberNft = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'POOL_MEMBER_NFT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIsethAllowance = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIsethBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadIsethDecimals = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"defaultOperators"`
 */
export const useReadIsethDefaultOperators = /*#__PURE__*/ createUseReadContract(
  { abi: isethAbi, functionName: 'defaultOperators' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getAccountActiveAgreements"`
 */
export const useReadIsethGetAccountActiveAgreements =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'getAccountActiveAgreements',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getAdmin"`
 */
export const useReadIsethGetAdmin = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'getAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getAgreementData"`
 */
export const useReadIsethGetAgreementData = /*#__PURE__*/ createUseReadContract(
  { abi: isethAbi, functionName: 'getAgreementData' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getAgreementStateSlot"`
 */
export const useReadIsethGetAgreementStateSlot =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'getAgreementStateSlot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getHost"`
 */
export const useReadIsethGetHost = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'getHost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getUnderlyingDecimals"`
 */
export const useReadIsethGetUnderlyingDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'getUnderlyingDecimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"getUnderlyingToken"`
 */
export const useReadIsethGetUnderlyingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'getUnderlyingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"granularity"`
 */
export const useReadIsethGranularity = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'granularity',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"isAccountCritical"`
 */
export const useReadIsethIsAccountCritical =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'isAccountCritical',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"isAccountCriticalNow"`
 */
export const useReadIsethIsAccountCriticalNow =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'isAccountCriticalNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"isAccountSolvent"`
 */
export const useReadIsethIsAccountSolvent = /*#__PURE__*/ createUseReadContract(
  { abi: isethAbi, functionName: 'isAccountSolvent' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"isAccountSolventNow"`
 */
export const useReadIsethIsAccountSolventNow =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'isAccountSolventNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"isOperatorFor"`
 */
export const useReadIsethIsOperatorFor = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'isOperatorFor',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"name"`
 */
export const useReadIsethName = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"realtimeBalanceOf"`
 */
export const useReadIsethRealtimeBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'realtimeBalanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"realtimeBalanceOfNow"`
 */
export const useReadIsethRealtimeBalanceOfNow =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'realtimeBalanceOfNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadIsethSymbol = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"toUnderlyingAmount"`
 */
export const useReadIsethToUnderlyingAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: isethAbi,
    functionName: 'toUnderlyingAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIsethTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: isethAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__
 */
export const useWriteIseth = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIsethApprove = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useWriteIsethAuthorizeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteIsethBurn = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"changeAdmin"`
 */
export const useWriteIsethChangeAdmin = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'changeAdmin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"createAgreement"`
 */
export const useWriteIsethCreateAgreement =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteIsethDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgrade"`
 */
export const useWriteIsethDowngrade = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'downgrade',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgradeTo"`
 */
export const useWriteIsethDowngradeTo = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'downgradeTo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgradeToETH"`
 */
export const useWriteIsethDowngradeToEth = /*#__PURE__*/ createUseWriteContract(
  { abi: isethAbi, functionName: 'downgradeToETH' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteIsethIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteIsethInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"initializeWithAdmin"`
 */
export const useWriteIsethInitializeWithAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 */
export const useWriteIsethMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationApprove"`
 */
export const useWriteIsethOperationApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 */
export const useWriteIsethOperationDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationDowngrade"`
 */
export const useWriteIsethOperationDowngrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 */
export const useWriteIsethOperationIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationSend"`
 */
export const useWriteIsethOperationSend = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'operationSend',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationTransferFrom"`
 */
export const useWriteIsethOperationTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationUpgrade"`
 */
export const useWriteIsethOperationUpgrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operatorBurn"`
 */
export const useWriteIsethOperatorBurn = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'operatorBurn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operatorSend"`
 */
export const useWriteIsethOperatorSend = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'operatorSend',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useWriteIsethRevokeOperator = /*#__PURE__*/ createUseWriteContract(
  { abi: isethAbi, functionName: 'revokeOperator' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfApproveFor"`
 */
export const useWriteIsethSelfApproveFor = /*#__PURE__*/ createUseWriteContract(
  { abi: isethAbi, functionName: 'selfApproveFor' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfBurn"`
 */
export const useWriteIsethSelfBurn = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'selfBurn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfMint"`
 */
export const useWriteIsethSelfMint = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'selfMint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfTransferFrom"`
 */
export const useWriteIsethSelfTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"send"`
 */
export const useWriteIsethSend = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'send',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"settleBalance"`
 */
export const useWriteIsethSettleBalance = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'settleBalance',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"terminateAgreement"`
 */
export const useWriteIsethTerminateAgreement =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIsethTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transferAll"`
 */
export const useWriteIsethTransferAll = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'transferAll',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIsethTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"updateAgreementData"`
 */
export const useWriteIsethUpdateAgreementData =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 */
export const useWriteIsethUpdateAgreementStateSlot =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethAbi,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgrade"`
 */
export const useWriteIsethUpgrade = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'upgrade',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeByETH"`
 */
export const useWriteIsethUpgradeByEth = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'upgradeByETH',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeByETHTo"`
 */
export const useWriteIsethUpgradeByEthTo = /*#__PURE__*/ createUseWriteContract(
  { abi: isethAbi, functionName: 'upgradeByETHTo' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useWriteIsethUpgradeTo = /*#__PURE__*/ createUseWriteContract({
  abi: isethAbi,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__
 */
export const useSimulateIseth = /*#__PURE__*/ createUseSimulateContract({
  abi: isethAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIsethApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: isethAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useSimulateIsethAuthorizeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateIsethBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: isethAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"changeAdmin"`
 */
export const useSimulateIsethChangeAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"createAgreement"`
 */
export const useSimulateIsethCreateAgreement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateIsethDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgrade"`
 */
export const useSimulateIsethDowngrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'downgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgradeTo"`
 */
export const useSimulateIsethDowngradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'downgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"downgradeToETH"`
 */
export const useSimulateIsethDowngradeToEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'downgradeToETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateIsethIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateIsethInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"initializeWithAdmin"`
 */
export const useSimulateIsethInitializeWithAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 */
export const useSimulateIsethMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationApprove"`
 */
export const useSimulateIsethOperationApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 */
export const useSimulateIsethOperationDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationDowngrade"`
 */
export const useSimulateIsethOperationDowngrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 */
export const useSimulateIsethOperationIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationSend"`
 */
export const useSimulateIsethOperationSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationSend',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationTransferFrom"`
 */
export const useSimulateIsethOperationTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operationUpgrade"`
 */
export const useSimulateIsethOperationUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operatorBurn"`
 */
export const useSimulateIsethOperatorBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operatorBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"operatorSend"`
 */
export const useSimulateIsethOperatorSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'operatorSend',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useSimulateIsethRevokeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfApproveFor"`
 */
export const useSimulateIsethSelfApproveFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'selfApproveFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfBurn"`
 */
export const useSimulateIsethSelfBurn = /*#__PURE__*/ createUseSimulateContract(
  { abi: isethAbi, functionName: 'selfBurn' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfMint"`
 */
export const useSimulateIsethSelfMint = /*#__PURE__*/ createUseSimulateContract(
  { abi: isethAbi, functionName: 'selfMint' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"selfTransferFrom"`
 */
export const useSimulateIsethSelfTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"send"`
 */
export const useSimulateIsethSend = /*#__PURE__*/ createUseSimulateContract({
  abi: isethAbi,
  functionName: 'send',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"settleBalance"`
 */
export const useSimulateIsethSettleBalance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'settleBalance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"terminateAgreement"`
 */
export const useSimulateIsethTerminateAgreement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIsethTransfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: isethAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transferAll"`
 */
export const useSimulateIsethTransferAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'transferAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIsethTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"updateAgreementData"`
 */
export const useSimulateIsethUpdateAgreementData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 */
export const useSimulateIsethUpdateAgreementStateSlot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgrade"`
 */
export const useSimulateIsethUpgrade = /*#__PURE__*/ createUseSimulateContract({
  abi: isethAbi,
  functionName: 'upgrade',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeByETH"`
 */
export const useSimulateIsethUpgradeByEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'upgradeByETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeByETHTo"`
 */
export const useSimulateIsethUpgradeByEthTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'upgradeByETHTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useSimulateIsethUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__
 */
export const useWatchIsethEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: isethAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchIsethAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementCreated"`
 */
export const useWatchIsethAgreementCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementLiquidated"`
 */
export const useWatchIsethAgreementLiquidatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementLiquidated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementLiquidatedBy"`
 */
export const useWatchIsethAgreementLiquidatedByEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementLiquidatedBy',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementLiquidatedV2"`
 */
export const useWatchIsethAgreementLiquidatedV2Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementLiquidatedV2',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementStateUpdated"`
 */
export const useWatchIsethAgreementStateUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementStateUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementTerminated"`
 */
export const useWatchIsethAgreementTerminatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementTerminated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AgreementUpdated"`
 */
export const useWatchIsethAgreementUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AgreementUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIsethApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"AuthorizedOperator"`
 */
export const useWatchIsethAuthorizedOperatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'AuthorizedOperator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Bailout"`
 */
export const useWatchIsethBailoutEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'Bailout',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Burned"`
 */
export const useWatchIsethBurnedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'Burned',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"ConstantInflowNFTCreated"`
 */
export const useWatchIsethConstantInflowNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'ConstantInflowNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"ConstantOutflowNFTCreated"`
 */
export const useWatchIsethConstantOutflowNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'ConstantOutflowNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Minted"`
 */
export const useWatchIsethMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'Minted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"PoolAdminNFTCreated"`
 */
export const useWatchIsethPoolAdminNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'PoolAdminNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"PoolMemberNFTCreated"`
 */
export const useWatchIsethPoolMemberNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'PoolMemberNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"RevokedOperator"`
 */
export const useWatchIsethRevokedOperatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'RevokedOperator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Sent"`
 */
export const useWatchIsethSentEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: isethAbi, eventName: 'Sent' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"TokenDowngraded"`
 */
export const useWatchIsethTokenDowngradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'TokenDowngraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"TokenUpgraded"`
 */
export const useWatchIsethTokenUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'TokenUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link isethAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIsethTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: isethAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethCustomAbi}__
 */
export const useWriteIsethCustom = /*#__PURE__*/ createUseWriteContract({
  abi: isethCustomAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"downgradeToETH"`
 */
export const useWriteIsethCustomDowngradeToEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethCustomAbi,
    functionName: 'downgradeToETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"upgradeByETH"`
 */
export const useWriteIsethCustomUpgradeByEth =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethCustomAbi,
    functionName: 'upgradeByETH',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"upgradeByETHTo"`
 */
export const useWriteIsethCustomUpgradeByEthTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: isethCustomAbi,
    functionName: 'upgradeByETHTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethCustomAbi}__
 */
export const useSimulateIsethCustom = /*#__PURE__*/ createUseSimulateContract({
  abi: isethCustomAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"downgradeToETH"`
 */
export const useSimulateIsethCustomDowngradeToEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethCustomAbi,
    functionName: 'downgradeToETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"upgradeByETH"`
 */
export const useSimulateIsethCustomUpgradeByEth =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethCustomAbi,
    functionName: 'upgradeByETH',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link isethCustomAbi}__ and `functionName` set to `"upgradeByETHTo"`
 */
export const useSimulateIsethCustomUpgradeByEthTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: isethCustomAbi,
    functionName: 'upgradeByETHTo',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__
 */
export const useReadSuperToken = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"CONSTANT_INFLOW_NFT"`
 */
export const useReadSuperTokenConstantInflowNft =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'CONSTANT_INFLOW_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"CONSTANT_OUTFLOW_NFT"`
 */
export const useReadSuperTokenConstantOutflowNft =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'CONSTANT_OUTFLOW_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"POOL_ADMIN_NFT"`
 */
export const useReadSuperTokenPoolAdminNft =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'POOL_ADMIN_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"POOL_MEMBER_NFT"`
 */
export const useReadSuperTokenPoolMemberNft =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'POOL_MEMBER_NFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadSuperTokenAllowance = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadSuperTokenBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadSuperTokenDecimals = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"defaultOperators"`
 */
export const useReadSuperTokenDefaultOperators =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'defaultOperators',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAccountActiveAgreements"`
 */
export const useReadSuperTokenGetAccountActiveAgreements =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getAccountActiveAgreements',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAdmin"`
 */
export const useReadSuperTokenGetAdmin = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'getAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAgreementData"`
 */
export const useReadSuperTokenGetAgreementData =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getAgreementData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getAgreementStateSlot"`
 */
export const useReadSuperTokenGetAgreementStateSlot =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getAgreementStateSlot',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getCodeAddress"`
 */
export const useReadSuperTokenGetCodeAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getCodeAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getHost"`
 */
export const useReadSuperTokenGetHost = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'getHost',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getUnderlyingDecimals"`
 */
export const useReadSuperTokenGetUnderlyingDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getUnderlyingDecimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"getUnderlyingToken"`
 */
export const useReadSuperTokenGetUnderlyingToken =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'getUnderlyingToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"granularity"`
 */
export const useReadSuperTokenGranularity = /*#__PURE__*/ createUseReadContract(
  { abi: superTokenAbi, functionName: 'granularity' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountCritical"`
 */
export const useReadSuperTokenIsAccountCritical =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'isAccountCritical',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountCriticalNow"`
 */
export const useReadSuperTokenIsAccountCriticalNow =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'isAccountCriticalNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountSolvent"`
 */
export const useReadSuperTokenIsAccountSolvent =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'isAccountSolvent',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isAccountSolventNow"`
 */
export const useReadSuperTokenIsAccountSolventNow =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'isAccountSolventNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"isOperatorFor"`
 */
export const useReadSuperTokenIsOperatorFor =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'isOperatorFor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"name"`
 */
export const useReadSuperTokenName = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadSuperTokenProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"realtimeBalanceOf"`
 */
export const useReadSuperTokenRealtimeBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'realtimeBalanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"realtimeBalanceOfNow"`
 */
export const useReadSuperTokenRealtimeBalanceOfNow =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'realtimeBalanceOfNow',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadSuperTokenSymbol = /*#__PURE__*/ createUseReadContract({
  abi: superTokenAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"toUnderlyingAmount"`
 */
export const useReadSuperTokenToUnderlyingAmount =
  /*#__PURE__*/ createUseReadContract({
    abi: superTokenAbi,
    functionName: 'toUnderlyingAmount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadSuperTokenTotalSupply = /*#__PURE__*/ createUseReadContract(
  { abi: superTokenAbi, functionName: 'totalSupply' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__
 */
export const useWriteSuperToken = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteSuperTokenApprove = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useWriteSuperTokenAuthorizeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteSuperTokenBurn = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"castrate"`
 */
export const useWriteSuperTokenCastrate = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'castrate',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"changeAdmin"`
 */
export const useWriteSuperTokenChangeAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"createAgreement"`
 */
export const useWriteSuperTokenCreateAgreement =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteSuperTokenDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgrade"`
 */
export const useWriteSuperTokenDowngrade = /*#__PURE__*/ createUseWriteContract(
  { abi: superTokenAbi, functionName: 'downgrade' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgradeTo"`
 */
export const useWriteSuperTokenDowngradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'downgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteSuperTokenIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteSuperTokenInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initializeWithAdmin"`
 */
export const useWriteSuperTokenInitializeWithAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 */
export const useWriteSuperTokenMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationApprove"`
 */
export const useWriteSuperTokenOperationApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 */
export const useWriteSuperTokenOperationDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDowngrade"`
 */
export const useWriteSuperTokenOperationDowngrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 */
export const useWriteSuperTokenOperationIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationSend"`
 */
export const useWriteSuperTokenOperationSend =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationSend',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationTransferFrom"`
 */
export const useWriteSuperTokenOperationTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationUpgrade"`
 */
export const useWriteSuperTokenOperationUpgrade =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorBurn"`
 */
export const useWriteSuperTokenOperatorBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operatorBurn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorSend"`
 */
export const useWriteSuperTokenOperatorSend =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'operatorSend',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useWriteSuperTokenRevokeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfApproveFor"`
 */
export const useWriteSuperTokenSelfApproveFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'selfApproveFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfBurn"`
 */
export const useWriteSuperTokenSelfBurn = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'selfBurn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfMint"`
 */
export const useWriteSuperTokenSelfMint = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'selfMint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfTransferFrom"`
 */
export const useWriteSuperTokenSelfTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"send"`
 */
export const useWriteSuperTokenSend = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'send',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"settleBalance"`
 */
export const useWriteSuperTokenSettleBalance =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'settleBalance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"terminateAgreement"`
 */
export const useWriteSuperTokenTerminateAgreement =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteSuperTokenTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferAll"`
 */
export const useWriteSuperTokenTransferAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'transferAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteSuperTokenTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementData"`
 */
export const useWriteSuperTokenUpdateAgreementData =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 */
export const useWriteSuperTokenUpdateAgreementStateSlot =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateCode"`
 */
export const useWriteSuperTokenUpdateCode =
  /*#__PURE__*/ createUseWriteContract({
    abi: superTokenAbi,
    functionName: 'updateCode',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgrade"`
 */
export const useWriteSuperTokenUpgrade = /*#__PURE__*/ createUseWriteContract({
  abi: superTokenAbi,
  functionName: 'upgrade',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useWriteSuperTokenUpgradeTo = /*#__PURE__*/ createUseWriteContract(
  { abi: superTokenAbi, functionName: 'upgradeTo' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__
 */
export const useSimulateSuperToken = /*#__PURE__*/ createUseSimulateContract({
  abi: superTokenAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateSuperTokenApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useSimulateSuperTokenAuthorizeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateSuperTokenBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"castrate"`
 */
export const useSimulateSuperTokenCastrate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'castrate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"changeAdmin"`
 */
export const useSimulateSuperTokenChangeAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'changeAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"createAgreement"`
 */
export const useSimulateSuperTokenCreateAgreement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'createAgreement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateSuperTokenDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgrade"`
 */
export const useSimulateSuperTokenDowngrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'downgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"downgradeTo"`
 */
export const useSimulateSuperTokenDowngradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'downgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateSuperTokenIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateSuperTokenInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"initializeWithAdmin"`
 */
export const useSimulateSuperTokenInitializeWithAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'initializeWithAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"makeLiquidationPayoutsV2"`
 */
export const useSimulateSuperTokenMakeLiquidationPayoutsV2 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'makeLiquidationPayoutsV2',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationApprove"`
 */
export const useSimulateSuperTokenOperationApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationApprove',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDecreaseAllowance"`
 */
export const useSimulateSuperTokenOperationDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationDecreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationDowngrade"`
 */
export const useSimulateSuperTokenOperationDowngrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationDowngrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationIncreaseAllowance"`
 */
export const useSimulateSuperTokenOperationIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationIncreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationSend"`
 */
export const useSimulateSuperTokenOperationSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationSend',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationTransferFrom"`
 */
export const useSimulateSuperTokenOperationTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operationUpgrade"`
 */
export const useSimulateSuperTokenOperationUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operationUpgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorBurn"`
 */
export const useSimulateSuperTokenOperatorBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operatorBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"operatorSend"`
 */
export const useSimulateSuperTokenOperatorSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'operatorSend',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useSimulateSuperTokenRevokeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfApproveFor"`
 */
export const useSimulateSuperTokenSelfApproveFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'selfApproveFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfBurn"`
 */
export const useSimulateSuperTokenSelfBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'selfBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfMint"`
 */
export const useSimulateSuperTokenSelfMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'selfMint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"selfTransferFrom"`
 */
export const useSimulateSuperTokenSelfTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'selfTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"send"`
 */
export const useSimulateSuperTokenSend =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'send',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"settleBalance"`
 */
export const useSimulateSuperTokenSettleBalance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'settleBalance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"terminateAgreement"`
 */
export const useSimulateSuperTokenTerminateAgreement =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'terminateAgreement',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateSuperTokenTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferAll"`
 */
export const useSimulateSuperTokenTransferAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'transferAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateSuperTokenTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementData"`
 */
export const useSimulateSuperTokenUpdateAgreementData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateAgreementStateSlot"`
 */
export const useSimulateSuperTokenUpdateAgreementStateSlot =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'updateAgreementStateSlot',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"updateCode"`
 */
export const useSimulateSuperTokenUpdateCode =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'updateCode',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgrade"`
 */
export const useSimulateSuperTokenUpgrade =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'upgrade',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link superTokenAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useSimulateSuperTokenUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: superTokenAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__
 */
export const useWatchSuperTokenEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: superTokenAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchSuperTokenAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementCreated"`
 */
export const useWatchSuperTokenAgreementCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementLiquidated"`
 */
export const useWatchSuperTokenAgreementLiquidatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementLiquidated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementLiquidatedBy"`
 */
export const useWatchSuperTokenAgreementLiquidatedByEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementLiquidatedBy',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementLiquidatedV2"`
 */
export const useWatchSuperTokenAgreementLiquidatedV2Event =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementLiquidatedV2',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementStateUpdated"`
 */
export const useWatchSuperTokenAgreementStateUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementStateUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementTerminated"`
 */
export const useWatchSuperTokenAgreementTerminatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementTerminated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AgreementUpdated"`
 */
export const useWatchSuperTokenAgreementUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AgreementUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchSuperTokenApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"AuthorizedOperator"`
 */
export const useWatchSuperTokenAuthorizedOperatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'AuthorizedOperator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Bailout"`
 */
export const useWatchSuperTokenBailoutEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Bailout',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Burned"`
 */
export const useWatchSuperTokenBurnedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Burned',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"CodeUpdated"`
 */
export const useWatchSuperTokenCodeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'CodeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"ConstantInflowNFTCreated"`
 */
export const useWatchSuperTokenConstantInflowNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'ConstantInflowNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"ConstantOutflowNFTCreated"`
 */
export const useWatchSuperTokenConstantOutflowNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'ConstantOutflowNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchSuperTokenInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Minted"`
 */
export const useWatchSuperTokenMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Minted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"PoolAdminNFTCreated"`
 */
export const useWatchSuperTokenPoolAdminNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'PoolAdminNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"PoolMemberNFTCreated"`
 */
export const useWatchSuperTokenPoolMemberNftCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'PoolMemberNFTCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"RevokedOperator"`
 */
export const useWatchSuperTokenRevokedOperatorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'RevokedOperator',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Sent"`
 */
export const useWatchSuperTokenSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Sent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"TokenDowngraded"`
 */
export const useWatchSuperTokenTokenDowngradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'TokenDowngraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"TokenUpgraded"`
 */
export const useWatchSuperTokenTokenUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'TokenUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link superTokenAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchSuperTokenTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: superTokenAbi,
    eventName: 'Transfer',
  })
