/** 支持的语言代码 */
export type LanguageCode = "ja" | "en" | "es";

/** 词元 */
export interface Token {
  text: string;
  pos: string;
  start: number;
  end: number;
  reading?: string;
  base?: string;
}

/** 语义块 */
export interface Chunk {
  type: string;
  tokenIndices: number[];
}

/** 分句 */
export interface Clause {
  id?: string;
  index: number;
  text: string;
  start: number;
  end: number;
  translation?: string | null;
  tokens: Token[];
  chunks: Chunk[];
}

/** 播放器数据源，结构参考 media-data.json */
export interface DataSource {
  media: {
    src: string;
    kind: "video" | "audio";
    poster?: string;
  };
  language: LanguageCode;
  clauses: Clause[];
  meta?: {
    title?: string;
    duration?: number;
  };
}
