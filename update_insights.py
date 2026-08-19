import re

with open('src/components/ValueStackSection.tsx', 'r') as f:
    content = f.read()

q1 = """    insight: "💡 Clinical Insight: Fluoride và Strontium phóng thích từ Xi măng tự dán BeautiLink SA (hoặc dòng composite Beautifil) cộng hưởng tạo mạng tinh thể Fluoro-Strontium-apatite cực bền, bít kín ống ngà hở và triệt tiêu hoàn toàn ê buốt sau phục hình."
  },"""
r1 = """    insight: "💡 Clinical Insight: Fluoride và Strontium cộng hưởng tạo mạng tinh thể Fluoro-Strontium-apatite cực bền, giúp tái khoáng và bít kín ống ngà hở. Đây là cơ chế bảo vệ tủy có mặt trong toàn bộ hệ sinh thái Giomer của Shofu, giải thích vì sao tỷ lệ ê buốt sau điều trị bằng 0 khi Bác sĩ trám răng với composite Beautifil hoặc gắn phục hình với xi măng tự dán BeautiLink SA."
  },"""

q2 = """    insight: "💡 Clinical Insight: Hạt S-PRG trong Composite lỏng Beautifil Injectable X can thiệp cấp độ gen, khóa con đường chuyển hóa đường của S. mutans, giúp kháng khuẩn chủ động và ngừa sâu răng thứ phát tận gốc tại các xoang trám phức tạp."
  },"""
r2 = """    insight: "💡 Clinical Insight: Hạt S-PRG can thiệp trực tiếp ở cấp độ gen để khóa con đường chuyển hóa đường của vi khuẩn S. mutans. Hoạt tính kháng khuẩn chủ động này được tích hợp đồng nhất trong mọi dòng composite thuộc hệ Giomer, giúp Bác sĩ yên tâm tuyệt đối khi đắp composite lỏng Beautifil Injectable X vào các hốc xoang sâu, khuất hoặc khó vệ sinh."
  },"""

q3 = """    insight: "💡 Clinical Insight: Nhờ hạt S-PRG tự động nhả ion đệm trung hòa axit lactic kết hợp với độ co ngót thể tích cực thấp 0.85% của Beautifil II LS, răng sau được bảo vệ kép hoàn hảo khỏi cả vi rò rỉ cơ học lẫn axit mảng bám."
  },"""
r3 = """    insight: "💡 Clinical Insight: Khả năng tự động nhả hệ ion đệm để trung hòa axit mảng bám là đặc tính sinh học bảo vệ đường viền chung của mọi vật liệu Giomer. Khi kết hợp đặc tính này với thiết kế giảm co ngót vật lý của dòng composite răng sau chuyên biệt Beautifil II LS (co ngót cực thấp 0.85%), răng sau sẽ đạt được độ bền bỉ kép tối đa."
  },"""

q4 = """    insight: "💡 Clinical Insight: Hoạt động như bình ắc quy, hạt S-PRG trong lớp dán lót FL-Bond II tự sạc Fluoride từ kem đánh răng và nhả ngược ra khi môi trường thiếu hụt, duy trì khả năng tái khoáng hóa và bảo vệ tủy răng bền bỉ suốt đời."
  },"""
r4 = """    insight: "💡 Clinical Insight: Khả năng \\"tái sạc\\" Fluoride vĩnh cửu là bảo chứng công nghệ độc quyền cho tất cả sản phẩm ứng dụng S-PRG của Shofu. Tính năng này hoạt động hiệu quả từ lớp dán lót FL-Bond II (chứa 40% hạt S-PRG) cho đến các lớp composite Beautifil phủ bên trên, giúp tái khoáng hóa liên tục và bảo vệ tủy răng bền bỉ theo thời gian."
  },"""

q5 = """    insight: "💡 Clinical Insight: Borate và Fluoride phóng thích từ Composite Beautifil II triệt tiêu lực bám dính của vi khuẩn, giữ bề mặt phục hình thẩm mỹ luôn láng mịn, bóng gương tự nhiên và kháng bám màu thực phẩm tối đa."
  }
];"""
r5 = """    insight: "💡 Clinical Insight: Sự kết hợp giữa Borate và Fluoride để phá vỡ lực bám dính của vi khuẩn là lá chắn sinh học bảo vệ bề mặt có trên mọi phục hình Giomer. Nhờ cơ chế này, các miếng trám thẩm mỹ bằng composite Beautifil II hay phục hình gián tiếp được gắn bằng xi măng BeautiLink SA luôn giữ được bề mặt láng mịn, sạch bóng màng sinh học và kháng bám màu thực phẩm tối ưu."
  }
];"""

content = content.replace(q1, r1)
content = content.replace(q2, r2)
content = content.replace(q3, r3)
content = content.replace(q4, r4)
content = content.replace(q5, r5)

with open('src/components/ValueStackSection.tsx', 'w') as f:
    f.write(content)
