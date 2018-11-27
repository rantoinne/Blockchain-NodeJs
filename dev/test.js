const Blockchain = require('./blockchain');

const Bitcoin = new Blockchain();

// Bitcoin.createNewBlock(1456, 'ASHJUYGXU754548', 'FDSYFTAUYSE46548EF');

// Bitcoin.createNewTransaction(100, 'asdas456864sa', 'asdasgrt6h658782dfg');

// Bitcoin.createNewBlock(4652, 'dfd5454sASHJUYGXU754548', 'FDSYFTAUYSE46548EFsdf6ds45s');

// Bitcoin.createNewTransaction(1001, 'asdas456864sa', 'asdasgrt6h658782dfg');
// Bitcoin.createNewTransaction(145, 'asdas456864sa', 'asdasgrt6h658782dfg');
// Bitcoin.createNewTransaction(100012, 'asdas456864sa', 'asdasgrt6h658782dfg');
// Bitcoin.createNewTransaction(100012, 'asdas456864sa', 'asdasgrt6h658782dfg');

// Bitcoin.createNewBlock(78436, 'dfd5454sASHJUYGXU754548', 'FDSYFTAUYSE46548EFsdf6ds45s');

const previousBlockHash = 'dghsjhfsd4543sd4f5';
const currentBlockData = [
	{
		amount: 100,
		sender: 'sdgid54df4g64dfsdg',
		recipient: 'sdfikshdf54g5f48754df'
	},
	{
		amount: 100,
		sender: 'f4g2sd18b3f246d8s7',
		recipient: '54fgd342fg84gsdc21v'
	},
	{
		amount: 45,
		sender: 'shdfoig578j756fcn',
		recipient: 'f4hjfg578ref2sd1f'
	}
];

console.log(Bitcoin);