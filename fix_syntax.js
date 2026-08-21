import fs from 'fs';

let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

content = content.replace(
  '        </div>\n      </section>\n\n      {/* SECTION 2',
  '      </section>\n\n      {/* SECTION 2'
);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
