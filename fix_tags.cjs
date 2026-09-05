const fs = require('fs');
let content = fs.readFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', 'utf8');

const searchTarget = `              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FAQ */}`;

const replacement = `              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* SECTION 8: FAQ */}`;

if (content.includes(searchTarget)) {
    content = content.replace(searchTarget, replacement);
    fs.writeFileSync('src/components/shofu/solutions/IndirectRestoration.tsx', content);
    console.log("Fixed tags at end of section 7");
} else {
    console.log("Target not found");
}
