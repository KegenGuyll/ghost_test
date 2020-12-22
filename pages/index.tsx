import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <h1>Checkout my Post!</h1>
      <Link href={`post`} as={`post`}>
        <a>
          <h5>Post!</h5>
        </a>
      </Link>
    </Container>
  );
}
