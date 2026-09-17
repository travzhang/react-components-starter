import type { ReactElement } from "react";
import { StyleSheet, Text } from "./primitives";

import type { Token as TokenData } from "./types/data-source";

export interface TokenProps {
  token: TokenData;
}

export function Token({ token }: TokenProps): ReactElement {
  return <Text style={styles.text}>{token.text}乌鸦坐飞机</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#111111",
  },
});
