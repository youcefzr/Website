"use client";

import { flex } from "styled-system/patterns";
import { Heading } from "~/components/ui/heading";

export default function GlobalError() {
  return (
    <div
      className={flex({
        minHeight: "70vh",
        justifyContent: "center",
        alignItems: "center",
      })}
    >
      <Heading size="xl">Sorry, there was an error loading this page.</Heading>
    </div>
  );
}