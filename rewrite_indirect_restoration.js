import fs from 'fs';

let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

content = content.replace(
  '<div className="space-y-24">',
  '<div className="w-full flex flex-col">'
);

content = content.replace(
  '<section className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-slate-200 shadow-xl relative overflow-hidden">',
  '<section className="py-16 lg:py-24 bg-white relative overflow-hidden border-b border-slate-200">\n        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>'
);

content = content.replace(
  '<div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">',
  '<div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">'
);

// End of Section 1
content = content.replace(
  '</div>\n      </section>\n\n      {/* SECTION 2',
  '</div>\n        </div>\n      </section>\n\n      {/* SECTION 2'
);

// Section 2
content = content.replace(
  '<section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative overflow-hidden text-center">',
  '<section className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden text-center">\n        <div className="absolute inset-0 bg-grid-pattern opacity-5 mix-blend-overlay"></div>\n        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">'
);
content = content.replace(
  '<div className="absolute inset-0 bg-grid-pattern opacity-5 mix-blend-overlay"></div>\n        <div className="relative z-10 max-w-4xl mx-auto mb-16">',
  '<div className="max-w-4xl mx-auto mb-16">'
);

content = content.replace(
  'làm phồng rộp chi phí.\n            </p>\n          </div>\n        </div>\n      </section>',
  'làm phồng rộp chi phí.\n            </p>\n          </div>\n        </div>\n        </div>\n      </section>'
);

// Section 3
content = content.replace(
  '<section className="space-y-12">',
  '<section className="py-20 lg:py-28 bg-slate-50 relative border-b border-slate-200">\n        <div className="w-[90%] lg:w-[80%] mx-auto space-y-12">'
);

content = content.replace(
  'Tổng chiều dày khoảng ghép = <span className="text-yellow-400">24µm</span>\n            </div>\n          </div>\n        </div>\n      </section>',
  'Tổng chiều dày khoảng ghép = <span className="text-yellow-400">24µm</span>\n            </div>\n          </div>\n        </div>\n        </div>\n      </section>'
);

// Section 4
content = content.replace(
  '<section className="space-y-8">',
  '<section className="py-20 lg:py-28 bg-white relative border-b border-slate-200">\n        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>\n        <div className="w-[90%] lg:w-[80%] mx-auto space-y-8 relative z-10">'
);

content = content.replace(
  '</tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>',
  '</tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        </div>\n      </section>'
);

// Section 5
content = content.replace(
  '<section className="py-12">',
  '<section className="py-20 lg:py-28 bg-slate-50 relative border-b border-slate-200">\n        <div className="w-[90%] lg:w-[80%] mx-auto">'
);
content = content.replace(
  'Chiếu hoàn thiện 10s/mặt.</p>\n            </div>\n          </div>\n        </div>\n      </section>',
  'Chiếu hoàn thiện 10s/mặt.</p>\n            </div>\n          </div>\n        </div>\n        </div>\n      </section>'
);

// Section 6
content = content.replace(
  '<section className="bg-slate-100 rounded-[2.5rem] p-8 md:p-12 lg:p-16 relative">',
  '<section className="py-20 lg:py-28 bg-slate-100 relative overflow-hidden">\n        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">'
);
content = content.replace(
  '<Quote className="absolute top-8 left-8 w-32 h-32 text-slate-200 opacity-50" />\n        <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">',
  '<Quote className="absolute -top-10 -left-10 w-40 h-40 text-slate-200 opacity-50" />\n          <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">'
);
content = content.replace(
  'Nhật Bản</p>\n            </div>\n          </div>\n        </div>\n      </section>',
  'Nhật Bản</p>\n            </div>\n          </div>\n        </div>\n        </div>\n      </section>'
);


// Section 7
content = content.replace(
  '<section className="bg-white rounded-[2.5rem] border-[3px] border-amber-400 p-2 shadow-[0_0_40px_rgba(251,191,36,0.2)]">',
  '<section className="py-20 lg:py-28 bg-slate-200 relative border-b border-slate-300">\n        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>\n        <div className="w-[90%] lg:w-[80%] mx-auto relative z-10">\n          <div className="bg-white rounded-[2.5rem] border-[3px] border-amber-400 p-2 shadow-[0_0_40px_rgba(251,191,36,0.2)] max-w-5xl mx-auto">'
);
content = content.replace(
  'ê buốt do vật liệu.\n            </p>\n          </div>\n        </div>\n      </section>',
  'ê buốt do vật liệu.\n            </p>\n          </div>\n            </div>\n          </div>\n        </div>\n      </section>'
);


// Section 8
content = content.replace(
  '<section className="max-w-3xl mx-auto pb-12">',
  '<section className="py-20 lg:py-28 bg-white relative">\n        <div className="w-[90%] lg:w-[80%] mx-auto">\n          <div className="max-w-3xl mx-auto">'
);
content = content.replace(
  'của toàn bộ hệ thống."\n        />\n      </section>',
  'của toàn bộ hệ thống."\n        />\n          </div>\n        </div>\n      </section>'
);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
