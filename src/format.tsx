import { LaunchProps, Action, Detail, ActionPanel } from "@raycast/api";
import { format } from 'sql-formatter';

interface SQLFormatArguments {
    code: string;
}

export default function Format(props: LaunchProps<{ arguments: SQLFormatArguments }>) {
    const { code } = props.arguments;
    const content = format(code, { language: 'mysql', keywordCase: 'upper' });

    const markdown = `\`\`\`sql\n${content}\n\`\`\``
    return <Detail
    actions={
      <ActionPanel>
        <Action.CopyToClipboard
          title="Copy To Clipboard"
          content={content}
        />
        <Action.CopyToClipboard
          title="Copy Minified SQL To Clipboard"
          content={content.replace(/\s+/g, ' ')}
        />
      </ActionPanel>
    } markdown={markdown}></Detail>
}