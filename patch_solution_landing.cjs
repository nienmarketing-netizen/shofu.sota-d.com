const fs = require('fs');
let content = fs.readFileSync('src/pages/SolutionLanding.tsx', 'utf8');

// 1. Add useState to React import
content = content.replace(`import React, { useEffect } from 'react';`, `import React, { useEffect, useState } from 'react';`);

// 2. Add CampaignModal import
if (!content.includes('CampaignModal')) {
    content = content.replace(`import { IndirectRestoration } from '../components/shofu/solutions/IndirectRestoration';`, `import { IndirectRestoration } from '../components/shofu/solutions/IndirectRestoration';\nimport { CampaignModal } from '../components/CampaignModal';`);
}

// 3. Add State
const stateToAdd = `  const [isCampaignModalOpen, setIsCampaignModalOpen] = useState(false);
  const [campaignModalTitle, setCampaignModalTitle] = useState('');

  const openCampaignModal = (title: string) => {
    setCampaignModalTitle(title);
    setIsCampaignModalOpen(true);
  };\n\n`;

if (!content.includes('openCampaignModal')) {
    content = content.replace(`  const { slug } = useParams<{ slug: string }>();`, stateToAdd + `  const { slug } = useParams<{ slug: string }>();`);
}

// 4. Update ShofuHeader
content = content.replace(
    `<ShofuHeader isLandingPage={true} />`, 
    `<ShofuHeader isLandingPage={true} onOpenQuote={() => openCampaignModal("Nhận tư vấn ngay")} />`
);

// 5. Add CampaignModal
if (!content.includes('<CampaignModal')) {
    content = content.replace(
        `      <ShofuFooter />\n    </div>\n  );\n}`,
        `      <ShofuFooter />\n      <CampaignModal\n        isOpen={isCampaignModalOpen}\n        onClose={() => setIsCampaignModalOpen(false)}\n        title={campaignModalTitle}\n      />\n    </div>\n  );\n}`
    );
}

fs.writeFileSync('src/pages/SolutionLanding.tsx', content);
console.log("Successfully patched SolutionLanding.tsx");
