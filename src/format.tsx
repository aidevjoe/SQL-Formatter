import { LaunchProps, Action, Detail, ActionPanel } from "@raycast/api";
import { format } from 'sql-formatter';

interface SQLFormatArguments {
    code: string;
}

export default function Format(props: LaunchProps<{ arguments: SQLFormatArguments }>) {
    const { code } = props.arguments;
    const content = format(code, { language: 'mysql' })

    const markdown = `\`\`\`sql\n${content}\n\`\`\``
    return <Detail
    actions={
      <ActionPanel title="#1 in raycast/extensions">
        <Action.CopyToClipboard
          title="Copy Result"
          content={content}
        />
      </ActionPanel>
    } markdown={markdown}></Detail>
}