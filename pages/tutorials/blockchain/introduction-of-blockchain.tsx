import Image from "next/image";
import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../components/Text/Text";
import Tutorial from "../../../components/Tutorial/Tutorial";

const IntroductionOfBlockchain = () => {
  return (
    <Tutorial title="Introduction of Blockchain">
      <Subtitle1>History</Subtitle1>
      <Paragraph>
        Bitcoin was one of the first protocols to use a revolutionary technology
        called blockchain. The Bitcoin whitepaper was released by a pseudonymous
        person called Satoshi Nakamoto which outlined how bitcoin could be used
        to make peer-to-peer transactions in a decentralized network that is
        powered by cryptography.
      </Paragraph>
      <Paragraph>
        A few years later a man released a paper describing a new protocol
        called Ethereum which used the same blockchain infrastructure as Bitcoin
        but added more things on it. People can use it to make entirely
        decentralized applications, decentralized organizations, build smart
        contracts and engage in agreements without a third-party intermediary or
        centralized governing.
      </Paragraph>
      <Paragraph>
        Their idea was to take the same pieces that made bitcoin great and add
        smart contracts to it. You can think of a blockchain as a decentralized
        database and with Ethereum it also can do computation in a decentralized
        manner.
      </Paragraph>
      <Paragraph>
        Ethereum is by far the most popular and most used blockchain or smart
        contract protocol. Learning how to write smart contracts on the Ethereum
        blockchain can help you understand how blockchains work in depth, and
        the knowledge you learnt isn’t only gonna be applied on the Ethereum
        blockchain, you can apply it to other blockchains as well because the
        concepts are the same.
      </Paragraph>
      <Subtitle1>Web 3.0</Subtitle1>
      <Paragraph>
        This is an idea for a new version of the World Wide Web based on the
        blockchain (can connect and interact with the blockchain), which
        incorporates concepts including decentralization and token-based
        economics.
      </Paragraph>
      <Subtitle1>Smart Contract</Subtitle1>
      <Paragraph>
        Smart contracts are pieces of code on the blockchain that are not run by
        any centralized intermediary. They are similar to regular traditional
        contracts that people make between each other but they are written in
        code (you can see them as programs to be executed later) and executed by
        the decentralized blockchain network, instead of being written down
        using pen and executed by the parties involved.
      </Paragraph>
      <Paragraph>
        Smart contract is one of the main differentiators between the Ethereum
        protocol and the Bitcoin protocol. Technically Bitcoin does also have
        smart contracts however they don&apos;t have the full range of
        capabilities as Ethereum. This is actually an intentional move by the
        Bitcoin developers; they view the Bitcoin network only as an asset
        whereas the Ethereum developers view that network as an asset and also a
        utility for people to build these smart contracts.
      </Paragraph>
      <Subtitle1>Oracle Problem</Subtitle1>
      <Paragraph>
        Smart contracts are amazing but they come with a natural fatal flaw,
        which is known as the oracle problem. If you want these smart contracts
        to actually be digital agreements then they need some way to interact
        with the real world like getting real world data.
      </Paragraph>
      <Paragraph>
        Smart contracts are unable to connect with external systems, data feeds,
        APIs, existing payment systems or any other off-chain resources on their
        own. That is because blockchain is a deterministic system, you can say
        ‘1 + 1 = 2’ and every other node (these nodes are helping us to execute
        these smart contract programs, they are also known as miners or
        validators which will be fully explained later) on the network can
        easily verify this. However a blockchain can&apos;t easily say ‘Yo,
        let&apos;s all grab the same random number’ because each node is going
        to get a different random number, they also can&apos;t say ‘hey,
        let&apos;s make an API call’, because if different nodes call the API at
        a different time they could potentially get different results.
      </Paragraph>
      <Paragraph>
        And if another node tries to replay these transactions by calling these
        APIs again, maybe 10 years in the future there&apos;s a good chance that
        the API is going to be depreciated or they could be hacked or they could
        be malicious etc.
      </Paragraph>
      <Paragraph>
        This is where oracles come into play, they are devices that bring data
        into a blockchain or execute some type of computation outside of the
        blockchain.
      </Paragraph>
      <Paragraph>
        But that’s not enough, our blockchains and smart contracts are
        decentralized applications and in order for them to stay decentralized,
        they would also need to get their data and do their external computation
        in a decentralized manner. Your on-chain logic will be decentralized on
        the blockchain but you&apos;ll also need your off-chain data and
        external computation decentralized as well.
      </Paragraph>
      <Paragraph>
        If the oracle is centralized, the network will suffer from the risk of
        having a centralized point of failure. We&apos;ve done all this work to
        make our decentralized computation on chains but we ruin all the
        decentrality by having a single point of failure. One of the whole
        purposes of blockchain is so that not a single entity can flip a switch
        and restrict our freedom to interact. We need to get data from many
        different decentralized sources or do any type of computation in a
        decentralized manner. This is where Chainlink (we will discuss that
        later) really shines.
      </Paragraph>
      <Paragraph>
        Combining these on-chain contracts and these off-chain data and external
        computation builds what&apos;s called hybrid smart contracts, a large
        majority of DeFi (Decentralized Finance) applications today are hybrid
        smart contracts.
      </Paragraph>
      <Subtitle1>Chainlink</Subtitle1>
      <Paragraph>
        Chainlink is the most popular and powerful decentralized blockchain
        oracle network built on Ethereum. The network is intended to be used to
        facilitate the transfer of tamper-proof data from off-chain sources to
        on-chain smart contracts.
      </Paragraph>
      <Paragraph>
        Chainlink is an incredibly powerful oracle network because it allows us
        to get data, get randomness, do some type of computations or customize
        our smart contracts in any way we want by making API calls to
        Chainlink’s smart contracts on the blockchain (more about that later).
      </Paragraph>
      <Paragraph>
        Chainlink is being run by independent and sybil resistant node
        operators, they focus on data validation and come to consensus about
        individual off-chain values to make them reliable enough to trigger
        contracts. Node operators are security reviewed, can provide a proven
        performance history and are high quality and highly sybil resistant.
      </Paragraph>
      <Paragraph>
        Currently one of the most popular features of Chainlink is their{" "}
        <Hyperlink href="https://data.chain.link/">data feeds</Hyperlink>, which
        provides currency exchange rate data from the off-chain world to the
        blockchain.
      </Paragraph>
      <Paragraph>
        If you visit their page, you will see a number of decentralized
        networks, they represent different blockchains.
      </Paragraph>
      <Image
        src="/images/tutorials/blockchain/introduction/introduction-of-blockchain/chainlink-data-feeds-networks.png"
        alt="Chainlink data feeds networks"
        height="565"
        width="889"
      />
      <Paragraph>
        If you click on one of them, you will see a bunch of contracts deployed
        by Chainlink on the specific blockchain to provide other contracts the
        data feeds.
      </Paragraph>
      <Image
        src="/images/tutorials/blockchain/introduction/introduction-of-blockchain/mainnet-data-feeds.png"
        alt="Data feeds on the Ethereum Mainnet"
        height="763"
        width="1843"
      />
      <Paragraph>
        If you click on one of the data feeds, it shows a number of
        decentralized oracles that return data for this particular data feed.
        The value of this data feed is calculated by summing all the responses
        from these oracles and taking the average.
      </Paragraph>
      <Image
        src="/images/tutorials/blockchain/introduction/introduction-of-blockchain/eth-usd-data-feeds.png"
        alt="Ethereum to US dollars data feeds"
        height="774"
        width="1230"
      />
      <Paragraph>
        These decentralized oracles (decentralized networks) help bring this
        data onto the chain, that allows users to use this common good and it
        will be cheaper, more secure and efficient than anybody running their
        own centralized oracle.
      </Paragraph>
      <Paragraph>
        You can check out{" "}
        <Hyperlink href="https://docs.chain.link/">
          Chainlink’s documentation
        </Hyperlink>{" "}
        for more information. And don’t worry if not everything is making sense
        right now, I assure you these will all make sense after I teach you how
        to use Chainlink later in this course. Right now the only thing you need
        to keep in mind is that we need a decentralized way to bring data from
        the outside world to the blockchain and oracles is our solution.
      </Paragraph>
    </Tutorial>
  );
};

export default IntroductionOfBlockchain;
