import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";
import Image from "next/image";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div>
      {ensAvatar && (
        <Image alt="ENS Avatar" src={ensAvatar} width={32} height={32} />
      )}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
}
