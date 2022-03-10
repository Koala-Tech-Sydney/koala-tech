import Image from "next/image";
import SubChapter from "../../../../components/Course/SubChapter";
import {
  Paragraph,
  Hyperlink,
  Subtitle2,
  Subtitle3,
} from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { blockchainCourse } from "..";

const HowDoBlockchainsWork = () => {
  return (
    <Chapter course={blockchainCourse}>
      <SubChapter name="Hash, Block, Blockchain and Distributed Blockchain" />
      <Paragraph>TODO: Video</Paragraph>
      <SubChapter name="Consensus" />
      <Paragraph>
        Consensus is the mechanism used to reach an agreement on the state of a
        blockchain. For example, when one node maliciously changes something on
        the block but the others don’t then the majority will rule and ignore or
        even kick that node out of the network.
      </Paragraph>
      <Paragraph>
        A consensus protocol in a blockchain or decentralized system can be
        roughly broken down into two pieces: a chain selection algorithm and a
        sybil resistance mechanism.
      </Paragraph>
      <Paragraph>
        There are some consensus protocols that have more features but we will
        focus on these two as they are the most common.
      </Paragraph>
      <Paragraph>
        Currently, both Bitcoin and Ethereum use a form of consensus called
        Nakamoto consensus to determine which is the real blockchain. This is a
        combination of proof of work and longest chain rule.
      </Paragraph>
      <Subtitle2>Sybil Resistance Mechanism</Subtitle2>
      <Paragraph>
        There are two types of the Sybil resistance mechanisms: proof of work
        and proof of stake.
      </Paragraph>
      <Subtitle3>Proof of Work</Subtitle3>
      <Paragraph>
        The mining feature is what&apos;s known as proof of work. ETH and BTC
        are currently proof of work blockchain that follows Nakamoto consensus.
        ETH2 will be using proof of stake.
      </Paragraph>
      <Paragraph>
        Proof of work is known as a sybil resistance mechanism because it
        defines a way to figure out who is the block author, i.e. who did the
        work to find that mine (solved the mathematical problem) and be the
        author of that block so all the other nodes can verify that it&apos;s
        accurate. Sybil resistance is a blockchain&apos;s ability to defend
        against users creating a large number of pseudo-anonymous identities to
        gain a disproportionately advantageous influence over the system and in
        layman&apos;s terms it&apos;s basically a way for a blockchain to defend
        against somebody making a bunch of fake blockchains so that they can get
        more and more rewards.
      </Paragraph>
      <Paragraph>
        Proof of work is sybil resistant because mining a single node has to go
        through a very computationally expensive process. No matter how many
        pseudo-anonymous accounts you make, each one still has to undergo this
        very computationally expensive activity of finding the answer to the
        proof-of-work problem, in our video demonstration in the previous
        section it was finding a nonce which gives a hash output starting with
        four zeros but again each blockchain might have a different problem, in
        fact some of these blockchains make this riddle intentionally hard or
        intentionally easy to change what&apos;s called the block time, the
        block time is how long it takes between blocks being published (solved)
        and it&apos;s proportional to how hard these algorithms are, so these
        problems actually can change depending on how long they want the block
        time to be.
      </Paragraph>
      <Paragraph>
        Proof of work also tells us where these transaction fees and these block
        rewards go to. When we made a transaction we had to talk about gas and a
        transaction fee. In a proof of work network they&apos;re called miners
        and in the proof of stake network they&apos;re called validators.
      </Paragraph>
      <Paragraph>
        In this proof of work system, all these nodes are competing against each
        other to find the answer to the blockchain riddle, all the nodes are
        trying to get this answer first because the first node to figure out the
        answer to the blockchain is going to get that transaction fee.
      </Paragraph>
      <Paragraph>
        When a node gets paid they actually get paid in two different ways: one
        is going to be the transaction fee and another piece is going to be the
        block reward. The gas price we were altering during a transaction is the
        transaction fee that we&apos;re going to pay to these blockchain nodes
        for including our transaction.
      </Paragraph>
      <Paragraph>
        You&apos;ve probably heard of the Bitcoin halving before, the halving is
        referring to this block reward getting cut in half and it&apos;s
        supposed to be cut in half roughly every four years.
      </Paragraph>
      <Paragraph>
        The block reward is given to these nodes who successfully mined a block
        from the blockchain protocol itself. This block reward increases the
        circulating amount of whatever cryptocurrency that is being rewarded. So
        these nodes are competing against each other to be the first one to find
        this transaction or equivalently saying, to be the first one to find the
        answer to this problem so that they can be the ones to win both this
        block reward and your transaction fee. Some blockchains like Bitcoin for
        example have a set time when they are no longer going to give out block
        rewards and the miners or the nodes are only going to get paid from
        transaction fees.
      </Paragraph>
      <Paragraph>
        The gas fee is paid by whoever initialized the transaction, when we got
        our funds from the faucet, there was some server and somebody else was
        paying the transaction fee for us. However when we sent ether from one
        account to another, our account actually paid some transaction fee to
        send that ETH.
      </Paragraph>
      <Paragraph>
        However, proof of work has some drawbacks as well, it costs a lot of
        electricity because every single node is running as fast as they can to
        win this race to get the rewards this leads to obviously an
        environmental impact. Since proof of work and Nakamoto consensus, a lot
        of other protocols have taken this idea and gone in a different
        direction with a different Sybil resistance protocol, a lot of them with
        the intention to be a lot more environmentally friendly and the most
        popular one right now is proof of stake. There are some chains that are
        already using this proof-of-stake protocol and that are live and
        thriving.
      </Paragraph>
      <Paragraph>
        Additionally, ethereum has decided to upgrade to ETH2 which will use
        this proof of stake algorithm as well it&apos;ll also have some other
        features.
      </Paragraph>
      <Subtitle3>Proof Of Stake</Subtitle3>
      <Paragraph>
        In proof of stake there&apos;s also a gas fee but it&apos;s paid out to
        validators instead of miners.
      </Paragraph>
      <Paragraph>
        Instead of solving a difficult problem, proof of stake nodes put up some
        collateral that they&apos;re going to behave honestly, aka they stake.
      </Paragraph>
      <Paragraph>
        In the case of Ethereum 2, nodes put up some Ethers as a stake that
        they&apos;re going to behave honestly in the network and if they
        misbehave to the network they are going to be removed some of their
        stake.
      </Paragraph>
      <Paragraph>
        This is a very good Sybil resistance mechanism because if you try to
        create a whole bunch of accounts then each one of those accounts you
        have to put up some stake and if you misbehave you&apos;re going to run
        the risk of losing all the money that you put up.
      </Paragraph>
      <Paragraph>
        In this system miners are actually called validators because
        they&apos;re no longer mining anything, they&apos;re just validating
        other nodes. Unlike proof of work which every node is racing to be the
        first one to find the block, in proof of stake nodes are actually
        randomly chosen to propose the new block and then the rest of the
        validators will validate if that node has proposed the block honestly as
        we saw in our previous section it&apos;s usually very easy for other
        nodes to verify if a proposal or a transaction is honest.
      </Paragraph>
      <Paragraph>
        Proof of stake obviously has some pros and cons as well. Pros are that
        it is a great Sybil resistance mechanism and a great way to figure out
        who the author of a block should be, the other pros are that it&apos;s
        way less computationally expensive to figure out the new block because
        instead of every single node on the network trying to do this only one
        node needs to do this and then the rest of the nodes just need to
        validate it.
      </Paragraph>
      <Paragraph>
        The cons are that it&apos;s usually considered a slightly less
        decentralized network due to the upfront staking costs it costs to
        participate. This gets into a little bit of a philosophical battle on
        how decentralized is decentralized enough.
      </Paragraph>
      <Paragraph>
        The general consensus amongst blockchain engineers is that proof of
        stake is very decentralized and secure, the massive environmental impact
        improvement is one of the two main reasons why ETH is shifting to ETH2;
        it reduces the environmental impact by up to 99 percent.
      </Paragraph>
      <Subtitle2>Chain Selection Algorithm</Subtitle2>
      <Paragraph>
        The decentralized network decides that whichever blockchain has the
        longest chain or the most number of blocks on it is going to be the
        chain that they use.
      </Paragraph>
      <Paragraph>
        This makes a lot of sense because every additional block that a chain is
        behind it&apos;s going to take more and more computation for it to come
        up, that&apos;s why when we saw in our transaction we saw confirmations.
      </Paragraph>
      <Image
        src="/images/courses/blockchain/introduction/how-do-blockchains-work/block-confirmations.png"
        alt="Data feeds on the Ethereum Mainnet"
        height="132"
        width="927"
      />
      <Paragraph>
        The number of confirmations is the number of additional blocks added on
        after our transaction went through in a block, so if we see 2 block
        confirmations it means that the block that our transaction was in has
        two blocks ahead of it in the longest chain now.
      </Paragraph>
      <SubChapter name="Attacks" />
      <Paragraph>
        There are two types of attacks that can happen in the blockchain world.
      </Paragraph>
      <Subtitle2>Sybil Attack</Subtitle2>
      <Paragraph>
        This is when a single node or entity creates a whole bunch of
        pseudo-anonymous accounts to try to influence a network. Obviously, on
        Bitcoin and Ethereum this is really really difficult because the user
        needs to do many computations in proof of work or have a ton of
        collateral in proof of stake.
      </Paragraph>
      <Subtitle2>51% Attack</Subtitle2>
      <Paragraph>
        A more prevalent attack is what&apos;s known as a 51 percent attack. As
        we saw as part of the consensus protocol these blockchains are going to
        agree that the longest chain is the one that they&apos;re going to go
        with.
      </Paragraph>
      <Paragraph>
        So as long as it matches up with 51 percent of the rest of the network,
        this means that if you have the longest chain and you own more than 51
        percent of the network you can do what&apos;s called a fork in the
        network and bring the whole network onto your now longest chain.
      </Paragraph>
      <Paragraph>
        You can see now that blockchains are very democratic whichever
        blockchain has the most buy-in and is the longest is the blockchain that
        the whole system is going to corroborate. When nodes produce a new block
        and add to the longest chain the other nodes will follow this longest
        chain and add those blocks to their chains.
      </Paragraph>
      <Paragraph>
        However if a group of nodes had enough nodes or enough computational
        power they could essentially be 51% of the network and influence the
        network in whatever direction that they wanted, this is what&apos;s
        known as a 51% attack and it&apos;s happened on blockchains like
        Ethereum classic which is not Ethereum. This is why the bigger a
        blockchain network is the more decentralized and the more secure it
        becomes.
      </Paragraph>
      <Paragraph>
        So if you choose run a node as well you are going to increase the
        security of the network as a whole.
      </Paragraph>
      <SubChapter name="Scalability" />
      <Paragraph>
        Gas prices can get really high if a lot of people want to send a
        transaction at the same time, because a block only has a limited amount
        of block space (can fit a limited amount of transactions) and the nodes
        can only add so many nodes. So when a lot of people want to use a
        blockchain the gas price skyrockets.
      </Paragraph>
      <Paragraph>
        This is not very scalable because if we want to add more and more people
        to these blockchains it&apos;s going to cost more and more to use the
        blockchains. Because more people are going to want to get into these
        blocks this means that there&apos;s kind of a ceiling to how many people
        can use the system because of the financial constraints that will get
        imposed as gas prices keep rising.
      </Paragraph>
      <Subtitle2>Sharding</Subtitle2>
      <Paragraph>
        Ethereum 2 is not only tackling the environmental impact of proof of
        work by switching to proof of stake but they are also implementing this
        new methodology called sharding and sharding is a solution to the
        scalability problem, a sharded blockchain really just means that
        it&apos;s going to be a blockchain of blockchains there is a main chain
        that&apos;s going to coordinate everything amongst several chains that
        hook into this main chain, this means that there&apos;s more chains for
        people to make transactions on, effectively increasing the amount of
        block space. Sharding can greatly increase the number of transactions on
        layer 1 of the blockchain.
      </Paragraph>
      <Subtitle2>Rollups</Subtitle2>
      <Paragraph>
        Rollups are solutions that perform transaction execution outside the
        main Ethereum chain (layer 1) but post transaction data on layer 1. As
        transaction data is on layer 1, rollups are secured by layer 1.
        Inheriting the security properties of layer 1 while performing execution
        outside of layer 1 is a defining characteristic of rollups.
      </Paragraph>
      <Paragraph>
        They&apos;re different from side chains because side chains derive their
        security from their own protocols, rollups derive their security from
        the base layers, so examples like Arbitrum and Optimism are going to be
        as secure as Ethereum.
      </Paragraph>
      <Subtitle2>Layer 1</Subtitle2>
      <Paragraph>
        Layer one refers to any base layer blockchain implementation like
        Bitcoin&apos;s layer one and Ethereum&apos;s a layer one, these are the
        base layer blockchain solutions.
      </Paragraph>
      <Subtitle2>Layer 2</Subtitle2>
      <Paragraph>
        Layer two is any application that is added on top of layer one, i.e. on
        top of a blockchain. Some examples of layer twos are going to be
        Chainlink, Arbitraum or Optimism Arbitraum and Optimism are very
        interesting because they are layer twos that also look to solve this
        scalability issue, they are what&apos;s known as rollups and they roll
        up their transactions into a layer one like Ethereum.
      </Paragraph>
    </Chapter>
  );
};

export default HowDoBlockchainsWork;
