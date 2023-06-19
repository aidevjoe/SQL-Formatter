import { getSelectedText, LaunchProps, Clipboard, Detail } from "@raycast/api";
import { format } from 'sql-formatter';

interface SQLFormatArguments {
    code: string;
}

export default function Format(props: LaunchProps<{ arguments: SQLFormatArguments }>) {
    const { code } = props.arguments;
    const content = format(code, { language: 'mysql' })

    const markdown = `\`\`\`sql\n${content}\n\`\`\``
    return <Detail markdown={markdown}></Detail>
}
