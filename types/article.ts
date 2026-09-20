import { ListSectionPayload } from './common';
import { RowDescription } from './row';

/**
 * ### Sample Rendering
 *
 * ![image](https://user-images.githubusercontent.com/8033320/80271217-268d6200-86f9-11ea-822b-438508d2cf09.png)
 *
 * @example https://github.com/chhann/resume/blob/master/payload/article.ts
 *
 */
export interface ArticlePayload extends ListSectionPayload {
  /** 아티클 리스트 */
  list: RowDescription[];
}
