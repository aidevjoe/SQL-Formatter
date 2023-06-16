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


// SELECT COUNT(*) as count, sum(price) as total_money, (select name from `products` where id = `product_id`) as name, (select platform_type from `products` where id = `product_id`) as platform_type
// FROM orders
// WHERE
// date_format(`purchase_date`,'%Y-%m')=date_format(date_sub(curdate(), interval 1 month),'%Y-%m') AND deleted_at IS NULL
// GROUP BY product_id  ORDER BY count desc