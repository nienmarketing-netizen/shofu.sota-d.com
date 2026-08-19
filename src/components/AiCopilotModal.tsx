import React, { useState } from 'react';
import { Sparkles, Send, X, Bot, User, RefreshCw, Award } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
import { AiChatMessage } from '../types';

interface AiCopilotModalProps {
 isOpen: boolean;
 onClose: () => void;
}

export const AiCopilotModal: React.FC<AiCopilotModalProps> = ({ isOpen, onClose }) => {
 const [messages, setMessages] = useState<AiChatMessage[]>([
  {
   id: '1',
   sender: 'assistant',
   text: "Xin chào Quý Bác sĩ! Tôi là Trợ lý AI Chuyên môn của Sota-D tại VIDEC 2026 (Gian hàng B75–B77). Quý Bác sĩ cần tư vấn về kỹ thuật 3D Printed Technique, công nghệ S-PRG tái khoáng hóa hay lịch trình báo cáo ngày 27/08/2026?",
   timestamp: 'Vừa xong',
  },
 ]);
 const [inputQuery, setInputQuery] = useState('');
 const [loading, setLoading] = useState(false);

 if (!isOpen) return null;

 const quickPrompts = [
  "Kỹ thuật 3D Printed Technique thực hiện thế nào?",
  "Công nghệ S-PRG giúp chống ê buốt ra sao?",
  "Thời gian & Diễn giả phiên báo cáo ngày 27/08?",
  "Các loại vật tư nha khoa SHOFU tại quầy B75–B77",
 ];

 const handleSendMessage = async (textToSend?: string) => {
  const query = textToSend || inputQuery;
  if (!query.trim() || loading) return;

  const userMsg: AiChatMessage = {
   id: Date.now().toString(),
   sender: 'user',
   text: query,
   timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };

  setMessages((prev) => [...prev, userMsg]);
  setInputQuery('');
  setLoading(true);

  try {
   const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: query }),
   });

   if (res.ok) {
    const data = await res.json();
    const aiMsg: AiChatMessage = {
     id: (Date.now() + 1).toString(),
     sender: 'assistant',
     text: data.reply || "Sota-D hân hạnh đón tiếp Quý Bác sĩ tại Gian hàng B75–B77 (VIDEC 2026).",
     timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, aiMsg]);
   } else {
    throw new Error('API offline');
   }
  } catch {
   setTimeout(() => {
    let responseText = "Sota-D kính mời Quý Bác sĩ đến tham dự Hands-on trực tiếp tại Gian hàng B75–B77 vào ngày 27/08/2026 tại 135 Nam Kỳ Khởi Nghĩa, Bến Thành, TP.HCM.";

    const q = query.toLowerCase();
    if (q.includes('3d') || q.includes('printed') || q.includes('ngọc') || q.includes('sáng')) {
     responseText = "Phiên Sáng (10:30 - 11:15): Báo cáo viên BS. Dương Bảo Ngọc chia sẻ giải pháp phục hồi trực tiếp răng sau nhanh chóng với 3D Printed Technique. Kỹ thuật kết hợp máng hướng dẫn trong suốt và dòng Composite lỏng chịu lực Beautifil Injectable X/XSL + BeautiBond Xtreme.";
    } else if (q.includes('s-prg') || q.includes('ê buốt') || q.includes('xi măng') || q.includes('khánh') || q.includes('chiều')) {
     responseText = "Phiên Chiều (14:15 - 15:00): ThS.BS Trần Quang Khánh trình bày về Xi măng đa năng thế hệ mới & Công nghệ S-PRG. Hạt độn S-PRG giải phóng 6 loại ion khoáng tự nhiên, chủ động tái khoáng hóa men răng và triệt tiêu ê buốt sau dán Zirconia/sứ với Beautilink SA.";
    } else if (q.includes('vật tư') || q.includes('sản phẩm') || q.includes('shofu') || q.includes('beautifil')) {
     responseText = "Tại Gian hàng Sota-D B75–B77, Quý Bác sĩ sẽ trực tiếp trải nghiệm: Beautifil Injectable X/XSL (Composite lỏng siêu bền bóng), BeautiBond Xtreme (Keo dán 1 thành phần đa năng), Beautilink SA (Resin Cement tự dán) và Công nghệ hạt độn S-PRG.";
    } else if (q.includes('quà') || q.includes('ưu đãi') || q.includes('quiz') || q.includes('đặc quyền')) {
     responseText = "Bác sĩ tham dự đầy đủ sẽ nhận ngay 'Bộ quà trải nghiệm SHOFU', vé tham gia Mini Game 'SHOFU QUIZ CHALLENGE' nhận thêm quà tặng cao cấp, trọn bộ slide bài giảng gốc và voucher mua sắm ưu đãi tại VIDEC 2026!";
    }

    const aiMsg: AiChatMessage = {
     id: (Date.now() + 1).toString(),
     sender: 'assistant',
     text: responseText,
     timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, aiMsg]);
    setLoading(false);
   }, 800);
   return;
  }

  setLoading(false);
 };

 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
   <div className="bg-white border border-[#00ADEF]/60 rounded-2xl w-full max-w-2xl h-[600px] flex flex-col shadow-md corner-accents overflow-hidden">
    {/* Header */}
    <div className="p-4 md:p-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
     <div className="flex items-center gap-3">
      <div className="p-2.5 shofu-gradient rounded-xl text-white shadow-md">
       <Bot className="w-5 h-5" />
      </div>
      <div>
       <div className="flex items-center gap-2">
        <h3 className="font-heading font-bold text-lg text-slate-900">Trợ Lý AI Sota-D</h3>
        <Badge variant="gold">VIDEC 2026</Badge>
       </div>
       <p className="font-mono text-[11px] text-slate-600">Tư vấn Vật liệu Nha khoa & Kỹ thuật Lâm sàng</p>
      </div>
     </div>

     <button onClick={onClose} className="text-slate-600 hover:text-slate-900 transition-colors p-1">
      <X className="w-6 h-6" />
     </button>
    </div>

    {/* Chat Messages Body */}
    <div className="flex-1 p-4 md:p-6 overflow-y-auto space-y-4 font-body text-sm bg-grid-pattern">
     {messages.map((msg) => (
      <div
       key={msg.id}
       className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
      >
       {msg.sender === 'assistant' && (
        <div className="w-8 h-8 rounded-full bg-sky-100 border border-[#00ADEF]/50 flex items-center justify-center text-[#00ADEF] shrink-0 mt-1">
         <Bot className="w-4 h-4" />
        </div>
       )}

       <div
        className={`max-w-[85%] rounded-2xl p-4 leading-relaxed ${
         msg.sender === 'user'
          ? 'sota-gradient text-white shadow-md text-xs sm:text-sm'
          : 'bg-slate-50/90 border border-slate-200 text-slate-900 font-body text-xs sm:text-sm'
        }`}
       >
        <p>{msg.text}</p>
        <span className="text-[10px] opacity-60 block mt-2 text-right font-mono">{msg.timestamp}</span>
       </div>

       {msg.sender === 'user' && (
        <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-900 shrink-0 mt-1">
         <User className="w-4 h-4" />
        </div>
       )}
      </div>
     ))}

     {loading && (
      <div className="flex items-center gap-3 text-xs font-mono text-[#00ADEF] animate-pulse p-2">
       <RefreshCw className="w-4 h-4 animate-spin" />
       <span>Đang kết nối kiến thức chuyên môn SHOFU Japan...</span>
      </div>
     )}
    </div>

    {/* Quick Prompts Chips */}
    <div className="px-4 py-2 bg-slate-50/80 border-t border-slate-200 flex gap-2 overflow-x-auto">
     {quickPrompts.map((p, idx) => (
      <button
       key={idx}
       onClick={() => handleSendMessage(p)}
       className="px-3 py-1 rounded-full bg-slate-50 hover:bg-sky-100 border border-slate-200 hover:border-sky-300 text-[11px] font-mono text-slate-600 hover:text-slate-900 whitespace-nowrap transition-all"
      >
       {p}
      </button>
     ))}
    </div>

    {/* Input Bar */}
    <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center gap-3">
     <Input
      placeholder="Hỏi về 3D Printed Technique, S-PRG, vật liệu SHOFU..."
      value={inputQuery}
      onChange={(e) => setInputQuery(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
     />
     <Button
      variant="primary"
      onClick={() => handleSendMessage()}
      disabled={loading || !inputQuery.trim()}
      icon={<Send className="w-4 h-4" />}
     >
      Gửi
     </Button>
    </div>
   </div>
  </div>
 );
};
