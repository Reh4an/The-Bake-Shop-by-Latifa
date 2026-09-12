const fs = require('fs');
const lines = fs.readFileSync('C:/Users/amaan/.gemini/antigravity/brain/dd575073-86da-4929-be4c-9525d990bcb9/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');
for (let l of lines) {
    if (!l) continue;
    try {
        const j = JSON.parse(l);
        if (j.type === 'TOOL_RESPONSE' && j.tool_calls && j.tool_calls[0].name === 'view_file') {
            const out = j.tool_calls[0].response.output;
            if (out.includes('Plain Wheat Cake')) {
                fs.writeFileSync('C:/Users/amaan/OneDrive/Desktop/rehaan/anti-gravity/the-bake-shop-latifa/old_menu.txt', out);
                console.log('Found and wrote old_menu.txt');
                break;
            }
        }
    } catch (e) {}
}
