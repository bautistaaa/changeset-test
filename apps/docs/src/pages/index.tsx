import { Button } from "@trash_dev/core";
import { useIsomorphicLayoutEffect } from "@trash_dev/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Acme docs page");
  }, []);
  return (
    <div>
      <h1>Acme Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
