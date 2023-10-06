import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  console.log(router);
  return (
    <header>
      <nav>
        <h1>BEGIN.log</h1>
        {router.pathname !== "/write" && <Link href={"/write"}>글 작성</Link>}
      </nav>
      {/* <div>search</div> */}
    </header>
  );
}
