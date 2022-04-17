import Image from "next/image";
import Link from "next/link";

import {
  Subtitle1,
  Subtitle2,
  Subtitle3,
  Paragraph,
  Hyperlink,
  HotKey,
  FeaturedText,
} from "../../../../components/Text/Text";
import Chapter from "../../../../components/Course/Chapter";
import { solidityCourse } from "..";
import ShellFormatter from "../../../../components/Formatter/ShellFormatter";

const HowAreAddressesComputed = () => {
  return (
    <Chapter course={solidityCourse}>
      <Paragraph>
        As you know, there are two kinds of accounts in Ethereum: External
        Accounts &amp; Contract Accounts. Their addresses are computed in a very
        different way.
      </Paragraph>
      <Subtitle1>External Accounts</Subtitle1>
      <Paragraph>
        There are 3 steps in total to generate an address for an external
        account. We will be using the bash shell, if you are using a Windows
        machine, you could use{" "}
        <Hyperlink href="https://gitforwindows.org/">Git Bash</Hyperlink> or
        Windows Subsystem for Linux.
      </Paragraph>
      <Paragraph>
        Firstly, a random private key of 64 hexadecimal characters (32 bytes) is
        generated. We can use the OpenSSL <FeaturedText>ecparam</FeaturedText>{" "}
        command to generate an elliptic curve private key. Ethereum standard is
        to use the secp256k1 curve, which is the same curve used by Bitcoin. The
        following command will print the private key in PEM format to a file
        called <FeaturedText>private_key_pem</FeaturedText>:
      </Paragraph>
      <ShellFormatter>{`$ openssl ecparam -name secp256k1 -genkey -noout > private_key_pem
$ cat private_key_pem
-----BEGIN EC PRIVATE KEY-----
MHQCAQEEIN8rObQpsiL9wrQb2P/LUEssAwyIEbr+Itvxy+1I4TwsoAcGBSuBBAAK
oUQDQgAEhXxq9EAtIjxjNj8U1sToOT7lw/sMDRR9E/QwttbtEjxQ4X39K6w9QzlH
ENTmU32pnGmy+oHV/W7DJsGkH2XPhA==
-----END EC PRIVATE KEY-----`}</ShellFormatter>
      <Paragraph>
        Secondly, a 128 hexadecimal character (64 bytes) public key is then
        derived from the generated private key using Elliptic Curve Digital
        Signature Algorithm (ECDSA). We can derive the public key from the
        private key and display both private and public key in hexadecimal
        format by using the following command:
      </Paragraph>
      <ShellFormatter>{`$ cat private_key_pem | openssl ec -text -noout > key
read EC key
$ cat key
Private-Key: (256 bit)
priv:
    df:2b:39:b4:29:b2:22:fd:c2:b4:1b:d8:ff:cb:50:
    4b:2c:03:0c:88:11:ba:fe:22:db:f1:cb:ed:48:e1:
    3c:2c
pub:
    04:85:7c:6a:f4:40:2d:22:3c:63:36:3f:14:d6:c4:
    e8:39:3e:e5:c3:fb:0c:0d:14:7d:13:f4:30:b6:d6:
    ed:12:3c:50:e1:7d:fd:2b:ac:3d:43:39:47:10:d4:
    e6:53:7d:a9:9c:69:b2:fa:81:d5:fd:6e:c3:26:c1:
    a4:1f:65:cf:84
ASN1 OID: secp256k1`}</ShellFormatter>
      <Paragraph>
        The public key is what we need in order to derive the Ethereum address.
        Every EC public key begins with the 0x04 prefix. You should remove this
        leading 0x04 byte and also the semicolons in order to hash it correctly.
        Using the following bash manipulations we can obtain the 128 hexadecimal
        character public key we want.
      </Paragraph>
      <ShellFormatter>{`$ cat key | grep pub -A 5 | tail -n +2 | tr -d '\n[:space:]:' | sed 's/^04//' > public_key
$ cat public_key
857c6af4402d223c63363f14d6c4e8393ee5c3fb0c0d147d13f430b6d6ed123c50e17dfd2bac3d43394710d4e6537da99c69b2fa81d5fd6ec326c1a41f65cf84`}</ShellFormatter>
      <Paragraph>
        Finally, we can then apply the Keccak-256 hash function to the public
        key to obtain a 64 hexadecimal character (32 bytes) hash string, the
        last 40 characters (20 bytes) of the resulting hash output prefixed with
        0x become the final Ethereum address. Since not every OS has a
        preinstall command for computing the keccak-256 hash, for convenience,
        you can use any{" "}
        <Hyperlink href="https://emn178.github.io/online-tools/keccak_256.html">
          keccak256 online tool
        </Hyperlink>{" "}
        to compute the result.
      </Paragraph>
      <Paragraph>
        By using the above online tool with the public key{" "}
        <FeaturedText>
          857c6af4402d223c63363f14d6c4e8393ee5c3fb0c0d147d13f430b6d6ed123c50e17dfd2bac3d43394710d4e6537da99c69b2fa81d5fd6ec326c1a41f65cf84
        </FeaturedText>{" "}
        and be sure you have set the input type as hex otherwise it will be
        treated as a normal string, then you will obtain the result{" "}
        <FeaturedText>
          34566a44f7b0bfcb378a519129a76cee76805d1cfaff8a027846a621cfad9cbb
        </FeaturedText>
        . The address will be the last 40 characters plus the 0x prefix, i.e.{" "}
        <FeaturedText>0x29a76cee76805d1cfaff8a027846a621cfad9cbb</FeaturedText>.
      </Paragraph>
      <Image
        src="/images/courses/solidity/how-are-addresses-computed/online-keccak256.png"
        alt="Online Keccak256"
        height="739"
        width="822"
      />
      <Paragraph>
        Now, as a bonus, here we’ll learn how to create an external account
        using the private key we just generated! First of all, let’s retrieve
        the private key from the key file we created above, we format the
        private key the same way we did for the public one above. The only
        exception is removing the leading 0x00 instead of the 0x04.
      </Paragraph>
      <ShellFormatter>{`$ cat key | grep priv -A 3 | tail -n +2 | tr -d '\n[:space:]:' | sed 's/^00//' > private_key
$ cat private_key
df2b39b429b222fdc2b41bd8ffcb504b2c030c8811bafe22dbf1cbed48e13c2c`}</ShellFormatter>
      <Paragraph>
        Now, we’ll be using{" "}
        <Hyperlink href="https://geth.ethereum.org/">Geth</Hyperlink> to run an
        Ethereum node on our computer so as to connect to the Ethereum network
        and create an external account.
      </Paragraph>
      <ShellFormatter>{`$ geth account import private_key
      Your new account is locked with a password. Please give a password. Do not forget this password.
      Password:
      Repeat password:
      Address: {29a76cee76805d1cfaff8a027846a621cfad9cbb}`}</ShellFormatter>
      <Paragraph>
        The address returned by geth is the same we computed. Note that geth
        will ask you a passphrase to encrypt your private key.
      </Paragraph>
      <Paragraph>
        You’re now ready to use the new account with geth as the account is on
        chain. Of course, it would be easier to take advantage of the{" "}
        <FeaturedText>geth account new</FeaturedText> command in order to
        quickly setup an Ethereum account. But manually doing it gives you the
        power of knowing your public and unencrypted private keys. You can even
        now try to import this account using its private key in MetaMask!
      </Paragraph>
      <Paragraph>
        Select the circular icon at the top right corner and choose Import
        Account.
      </Paragraph>
      <Image
        src="/images/courses/solidity/how-are-addresses-computed/metamask-circular-btn.png"
        alt="MetaMask circular button"
        height="528"
        width="385"
      />
      <Paragraph>
        Next, enter the private key you have generated and click on Import.
      </Paragraph>
      <Image
        src="/images/courses/solidity/how-are-addresses-computed/metamask-import-account.png"
        alt="MetaMask import account"
        height="565"
        width="381"
      />
      <Paragraph>
        Tada! You now have access to this account in MetaMask.
      </Paragraph>
      <Image
        src="/images/courses/solidity/how-are-addresses-computed/metamask-account-view.png"
        alt="MetaMask new account"
        height="559"
        width="382"
      />
      <Subtitle1>Contract Accounts</Subtitle1>
      <Paragraph>
        The address for an Ethereum contract is deterministically computed from
        the address of its creator (sender) and how many transactions the
        creator has sent (nonce). The sender and nonce are RLP encoded and then
        hashed with Keccak-256.
      </Paragraph>
      <Paragraph>
        For more information, you can check out{" "}
        <Hyperlink href="https://ethereum.stackexchange.com/questions/760/how-is-the-address-of-an-ethereum-contract-computed">
          How is the address of an ethereum contract computed
        </Hyperlink>
        .
      </Paragraph>
    </Chapter>
  );
};

export default HowAreAddressesComputed;
