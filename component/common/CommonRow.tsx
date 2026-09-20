import { RowPayload } from '../../types/row';
import { CommonDescription } from './CommonDescription';

export function CommonRows({ index, payload }: { payload: RowPayload; index: number }) {
  const { left, right } = payload;

  const isNeedDescriptionPadding = !!(right.title || right.subTitle);

  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <div className="split-row">
        <div className="split-left">
          <h4 className="experience-period">{left.title}</h4>
          {left.subTitle ? <div>{left.subTitle}</div> : ''}
        </div>
        <div>
          {right.title ? <h4>{right.title}</h4> : ''}
          {right.subTitle ? <i className="experience-position-title">{right.subTitle}</i> : ''}
          {right.descriptions ? (
            <CommonDescription
              descriptions={right.descriptions}
              option={{ padding: isNeedDescriptionPadding }}
            />
          ) : (
            ''
          )}
          {right.skillKeywords ? <SkillKeywords keywords={right.skillKeywords} /> : ''}
        </div>
      </div>
    </div>
  );
}

function SkillKeywords({ keywords }: { keywords: string[] }) {
  return (
    <ul className="description-list--padded">
      <li>
        <strong>Skill Keywords</strong>
        <div className="experience-keywords">
          {keywords.map((keyword, index) => (
            <span key={index.toString()} className="tag tag--accent">
              {keyword}
            </span>
          ))}
        </div>
      </li>
    </ul>
  );
}
