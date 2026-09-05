const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const s4 = `          </div>
        </div>
        </div>
      </section>

      {/* SECTION 5: CLINICAL WORKFLOW REWRITE */}`;

const r4 = `          </div>
        </div>
        
        <div className="mt-12 md:mt-16 text-center relative z-10">
          <button 
            onClick={openOffer}
            className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
          >
            <Gift className="w-5 h-5 shrink-0" />
            <span>Tư vấn giải pháp tối ưu chi phí</span>
            <ArrowRight className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        </div>
      </section>

      {/* SECTION 5: CLINICAL WORKFLOW REWRITE */}`;

content = content.replace(s4, r4);

const s5 = `            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6: SOCIAL PROOF */}`;

const r5 = `            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center relative z-10">
            <button 
              onClick={openOffer}
              className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <Gift className="w-5 h-5 shrink-0" />
              <span>Trải nghiệm phác đồ 3 bước</span>
              <ArrowRight className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 6: SOCIAL PROOF */}`;

content = content.replace(s5, r5);

const s6 = `          </div>
        </div>
        </div>
      </section>

      {/* SECTION 7: THE CORE OFFER */}`;

const r6 = `          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center relative z-10">
          <button 
            onClick={openOffer}
            className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
          >
            <Gift className="w-5 h-5 shrink-0" />
            <span>Gia nhập cộng đồng nha sĩ tinh hoa</span>
            <ArrowRight className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

        </div>
      </section>

      {/* SECTION 7: THE CORE OFFER */}`;

content = content.replace(s6, r6);

const s8 = `          }
        />
          </div>
        </div>
      </section>
    </div>
  );
}`;

const r8 = `          }
        />
          
          <div className="mt-12 md:mt-16 text-center relative z-10">
            <button 
              onClick={openOffer}
              className="group relative inline-flex items-center justify-center gap-2 bg-[#00ADEF] text-white px-8 py-4 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-sky-500 hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
              <Gift className="w-5 h-5 shrink-0" />
              <span>Bác sĩ còn câu hỏi? Nhận tư vấn ngay</span>
              <ArrowRight className="w-5 h-5 shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>

          </div>
        </div>
      </section>
    </div>
  );
}`;

content = content.replace(s8, r8);

fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
