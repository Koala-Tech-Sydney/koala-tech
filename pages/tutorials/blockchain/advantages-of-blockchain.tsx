import {
  Subtitle1,
  Subtitle2,
  Paragraph,
  Hyperlink,
} from "../../../components/Text/Text";
import Tutorial from "../../../components/Tutorial/Tutorial";

const AdvantagesOfBlockchain = () => {
  return (
    <Tutorial title="Advantages of Blockchain">
      <Paragraph>
        Now you understand a little bit what a smart contract is, before
        understanding the inner working mechanism of a blockchain, it is a good
        idea to know the advantages of using a blockchain first.
      </Paragraph>
      <Paragraph>
        The advantages of blockchain all add up to two major pieces - freedom
        and trustlessness, trustlessness means that you don&apos;t have to trust
        a third party: a bank, a person, or any intermediary that could operate
        between you and your cryptocurrency transactions. Therefore, building
        Blockchain and Solidity applications (Solidity is one of the programming
        languages for writing smart contracts in the blockchain world) is
        building a world of more trust and accountability.
      </Paragraph>
      <Paragraph>
        It gives us freedom to engage with other people how we wish because
        there&apos;s no centralized controlling body influencing every action
        that we make, all the rules are the same and nobody&apos;s getting
        special treatment, this brings out this new world of economic
        opportunity as well and as our lives become more and more digital,
        we&apos;re constantly being bombarded with centralized services that
        want us to use their interface so they can profit on how we interact and
        force us or push us to make the decisions that they&apos;re motivated
        for us to make. Smart contracts, decentralized applications and
        blockchain allows us to be free of these oppressors and live in a world
        that&apos;s truly free and trustless.
      </Paragraph>
      <Subtitle1>Decentralization</Subtitle1>
      <Paragraph>
        There&apos;s no centralized entity that controls the blockchain, it is
        run by a network of independent users. The individuals that make up
        blockchain are known as node operators (miners and validators, more
        about that later) and they are running the software that connects the
        whole blockchain together. It&apos;s all these different independent
        individuals that form the decentralized network.
      </Paragraph>
      <Subtitle1>Transparency and Flexibility</Subtitle1>
      <Paragraph>
        Everything that&apos;s done on a blockchain and all the rules that are
        made can be seen by everyone, there&apos;s no backdoor deals and no
        funny business happenings. Everything that happens on chain you can see
        means that there&apos;s no special information that only a few have,
        everyone has to play by the same rules and everyone can see exactly what
        those rules are.
      </Paragraph>
      <Paragraph>
        Additionally this doesn&apos;t mean that everything you do is tracked,
        the blockchain is pseudo-anonymous as you can create different accounts
        to interact with the blockchain in many ways. Other people cannot
        recognize you from your account as long as you don’t tell other people
        you own the account.
      </Paragraph>
      <Subtitle1>Speed and Efficiency</Subtitle1>
      <Paragraph>
        Have you ever tried to make a withdrawal from the bank and it took three
        to five days? All the bank is doing is adding and subtracting numbers,
        so why does it take so long? That’s because sometimes they need human
        verifications.
      </Paragraph>
      <Paragraph>
        Since transactions on the blockchains are verified by a decentralized
        collective (miners or validators), the settlement period in this case is
        substantially faster and depending on the blockchain that you&apos;re
        using it can be from 10 minutes all the way down to just a couple of
        seconds.
      </Paragraph>
      <Subtitle1>Security and Immutability</Subtitle1>
      <Paragraph>
        Blockchains are immutable which means they can&apos;t be changed without
        other peers noticing and because of that, they can&apos;t be tampered
        with or corrupted in any way, this introduces massive security on our
        data, our transactions and anything like that. Blockchains are
        incredibly incredibly secure. Hacking the blockchain is nearly
        impossible and substantially harder than hacking a centralized entity.
      </Paragraph>
      <Paragraph>
        In the regular world if your computer goes down and all of your backup
        computers go down, all your data is gone. On a blockchain, if several
        nodes go down it doesn&apos;t matter because as long as one node is
        running, the data is safe.
      </Paragraph>
      <Paragraph>
        Instead of having gold stored in a locker or contract written on a piece
        of paper or on your computer you have asset that is locked on the
        blockchain forever and all you need to do to access it is to have a
        private key which is essentially a password so you don&apos;t have to
        lug your gold around or lug your contracts around with you. It is always
        stored in the blockchain’s smart contracts.
      </Paragraph>
      <Subtitle1>Removal of Counterparty Party</Subtitle1>
      <Paragraph>
        In the traditional world when we engage with individuals they don&apos;t
        always have our best interests at heart, a lot of them are usually
        self-motivated in some sense and there&apos;s nothing wrong with that,
        however when we make an agreement with them, this agreement can have a
        massive conflict of interest with the user who&apos;s supposed to
        execute that agreement.
      </Paragraph>
      <Paragraph>
        Let&apos;s take insurance for example, if I pay an insurance provider
        $100 a month and in the event that I get hit by a bus we&apos;ve made a
        contract that they&apos;re going to pay my medical bills. However they
        have this massive conflict of interest, insurance companies aren&apos;t
        in the business of giving out money, they&apos;re in the business of
        making money so even though they&apos;ve signed this agreement, when
        this event occurs they still don&apos;t want to pay this money out to me
        and if they can find a loophole in the contract they will, because that
        is what they are motivated to do so, so they have this massive conflict
        of interest and this is native in all of the agreements that we make
        today, they are the ones who decides whether or not they&apos;re going
        to execute their agreement.
      </Paragraph>
      <Paragraph>
        Giving execution power to the party that doesn&apos;t want to execute
        something has often led to frustration, now the follow-up is you can
        always sue them and go through this process but now you&apos;re wasting
        all this time going through this long process to get something that you
        should have originally gotten in the first place.
      </Paragraph>
      <Subtitle1>Trust Minimized Agreements</Subtitle1>
      <Paragraph>
        Smart contracts allow us to engage in trustless and trust minimized
        agreements. We currently live in a world of brand-based agreements. If I
        engage in some agreement and I don&apos;t like the service that I&apos;m
        provided, my alternative to this is to look for another service
        who&apos;s going to make the exact same set of promises to me and then I
        have to trust them that they&apos;re going to execute faithfully.
      </Paragraph>
      <Paragraph>
        Smart contracts allow us to move from brand-based agreements to
        math-based agreements. With smart contracts we don&apos;t even have to
        trust that they&apos;re going to do the right thing, because one plus
        one is always going to equal two in the math world. Whatever the code
        determines is the input output that&apos;s exactly what&apos;s gonna
        happen every single time.
      </Paragraph>
    </Tutorial>
  );
};

export default AdvantagesOfBlockchain;
