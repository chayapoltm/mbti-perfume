import React, { useState } from 'react';

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, N: 0, S: 0, F: 0, T: 0, J: 0, P: 0 });
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "ในการพบปะคนใหม่ คุณมักจะ:",
      a: "เริ่มสนทนาและรู้สึกสดชื่น",
      b: "รอให้คนอื่นเริ่มและฟัง",
      type: ["E", "I"]
    },
    {
      q: "คุณชอบที่จะ:",
      a: "มุ่งเน้นไปที่ข้อเท็จจริงและรายละเอียดจริง",
      b: "ถาม 'แล้วจะเป็นไปอย่างไร' และคิดถึงความเป็นไปได้",
      type: ["S", "N"]
    },
    {
      q: "เมื่อตัดสินใจสำคัญ คุณมักจะ:",
      a: "วิเคราะห์ข้อมูลและใช้ตรรกะ",
      b: "พิจารณาว่ามันจะส่งผลต่ออารมณ์ของคนอื่น",
      type: ["T", "F"]
    },
    {
      q: "สำหรับการทำงานและชีวิต คุณชอบ:",
      a: "มีแผนและกำหนดเวลาที่ชัดเจน",
      b: "มีความยืดหยุ่นและเปิดต่อโอกาสใหม่",
      type: ["J", "P"]
    },
    {
      q: "ในการชุมนุม คุณ:",
      a: "พลังมาจากการโต้ตอบกับคนอื่น",
      b: "ต้องการเวลาเพื่อตัวเองหลังจากหลายวัน",
      type: ["E", "I"]
    },
    {
      q: "คุณมักจะสนใจ:",
      a: "สิ่งที่สามารถสัมผัส เห็น และวัดได้",
      b: "ธีมที่ลึกซึ้ง ความหมาย และแนวโน้มอนาคต",
      type: ["S", "N"]
    },
    {
      q: "เมื่อมีข้อขัดแย้ง คุณจะ:",
      a: "มองหาวิธีแก้ปัญหาที่ยุติธรรมและสมควร",
      b: "พยายามทำให้ทุกคนรู้สึกได้ยินและเข้าใจ",
      type: ["T", "F"]
    },
    {
      q: "คุณมักจะเลือก:",
      a: "ลงมือทำและเรียนรู้จากประสบการณ์",
      b: "วางแผนครั้งแรก แล้วจึงเริ่มทำ",
      type: ["P", "J"]
    },
    {
      q: "คุณรู้สึกมีพลังเมื่อ:",
      a: "มีกิจกรรมมากมาย และเป็นส่วนหนึ่งของกลุ่ม",
      b: "มีเวลาเพื่อตัวเองและคิดทำความเข้าใจสิ่งต่าง ๆ",
      type: ["E", "I"]
    },
    {
      q: "ในการเรียนรู้สิ่งใหม่ คุณชอบ:",
      a: "ลงมือปฏิบัติจริง และเข้าใจว่ามันทำงานอย่างไร",
      b: "เข้าใจทฤษฎี ลักษณะเฉพาะ และการใช้งาน",
      type: ["S", "N"]
    },
    {
      q: "ตัวเลือกที่ดีกว่า:",
      a: "ทำให้งานเสร็จโดยใช้วิธีวัตถุประสงค์",
      b: "พิจารณาความรู้สึกและค่าธรรมชาติของทุกคน",
      type: ["T", "F"]
    },
    {
      q: "ในความสัมพันธ์ทำงาน คุณ:",
      a: "ชอบความชัดเจน กำหนดเวลา และความเป็นระเบียบ",
      b: "ชอบความยืดหยุ่น และปรับเปลี่ยนตามสถานการณ์",
      type: ["J", "P"]
    },
    {
      q: "งานปาร์ตี้คือที่ที่คุณ:",
      a: "ปลีกตัวออกมาเล่าเรื่องราว แลกเปลี่ยน และสนุกสนาน",
      b: "นั่งเคยเวลาเล็กน้อย หรือไปนอก",
      type: ["E", "I"]
    },
    {
      q: "คุณจำได้ดีที่สุด:",
      a: "ข้อมูลเฉพาะ และรายละเอียดที่เกี่ยวข้อง",
      b: "รูปแบบ การเชื่อมต่อ และความหมายโดยรวม",
      type: ["S", "N"]
    },
    {
      q: "เมื่อให้คำวิจารณ์ คุณ:",
      a: "ตรงไปตรงมา และให้ข้อเท็จจริง",
      b: "ค่อยเป็นค่อยไป และคำนึงถึงผลต่อจิตใจ",
      type: ["T", "F"]
    },
    {
      q: "คุณมักจะ:",
      a: "จิกกระทำและเสร็จสิ้น",
      b: "เปิดตัวเลือก และไปตรวจสอบ",
      type: ["J", "P"]
    }
  ];

  const perfumes = {
    ISTJ: { 
      name: "Amber Woods", 
      emoji: "📋",
      scent: "กลิ่นไม้สีแนว เข้มข้น อบอุ่น",
      desc: "บุคลิกประเภท Logistician - มีความรับผิดชอบสูง จริงใจ และเป็นระเบียบ สมบูรณ์ แข็งแกร่ง ตรงต่อเวลา",
      color: "#D4A574"
    },
    ISFJ: { 
      name: "Gentle Peony", 
      emoji: "🛡️",
      scent: "กลิ่นดอกไม้นุ่มนวล อบอุ่น",
      desc: "บุคลิกประเภท Defender - ใจดี หมั่นเพียร ค่อนข้างเงียบ แต่รักษาสัมพันธ์ที่สำคัญด้วยใจแน่วแน่",
      color: "#E8B4D4"
    },
    INFJ: { 
      name: "Mystic Iris", 
      emoji: "🧿",
      scent: "กลิ่นลึกลับ สะท้อนใจ",
      desc: "บุคลิกประเภท Advocate - มีความเห็นแบบลึกซึ้ง มีอุดมการณ์สูง คิดเฉพาะตัว ลึกลับ แต่กัลยามิตรและห่วงใจคน",
      color: "#9B7BA0"
    },
    INTJ: { 
      name: "Dark Oud", 
      emoji: "⚙️",
      scent: "กลิ่นอูด เข้มข้น เมืองหลวง",
      desc: "บุคลิกประเภท Architect - ไฟฟ้า มีวิสัยทัศน์ ปฏิเสธความเห็นที่ไม่มีฐานการวิจารณ์ และพยายามแข่งเพื่อความเป็นเลิศ",
      color: "#2C2C2C"
    },
    ISTP: { 
      name: "Fresh Citrus", 
      emoji: "🔧",
      scent: "กลิ่นส้มสดชื่น กีฬา",
      desc: "บุคลิกประเภท Virtuoso - นิยมตัวเอง ชอบความอิสระ ตรรกะ เงียบ แต่มีความสามารถในการแก้ปัญหา",
      color: "#FF9500"
    },
    ISFP: { 
      name: "Soft Floral", 
      emoji: "🎨",
      scent: "กลิ่นดอกไม้อ่อนไหว นิ่มนวล",
      desc: "บุคลิกประเภท Adventurer - อ่อนไหว ศิลปี มีความรักษา แต่ไม่ชอบความขัดแย้ง ทำตามหัวใจ",
      color: "#F4D03F"
    },
    INFP: { 
      name: "Sweet Lavender", 
      emoji: "🦋",
      scent: "กลิ่นลาเวนเดอร์หวาน ฝันเห็น",
      desc: "บุคลิกประเภท Mediator - เป็นอุดมคติ ฝันเห็น ทำตามค่านิยม ศิลปี ไม่สนใจเงิน เต็มไปด้วยความรักและความหวัง",
      color: "#B19CD9"
    },
    INTP: { 
      name: "Minimalist Musk", 
      emoji: "🧪",
      scent: "กลิ่นมัสก์ เรียบง่าย ลึก",
      desc: "บุคลิกประเภท Logician - วิเคราะห์สิ่งต่างๆ บ่อยครั้งที่อยู่ในคิด ชอบการสืบสอนและแก้ปัญหาที่ซับซ้อน",
      color: "#95A5A6"
    },
    ESTP: { 
      name: "Spicy Amber", 
      emoji: "🚀",
      scent: "กลิ่นเผ็ดร้อน แอมเบอร์",
      desc: "บุคลิกประเภท Entrepreneur - สำรวจ เสี่ยง ชอบสิ่งใหม่ สูตร ต่อสู้ ดูแลตนเองดี",
      color: "#E74C3C"
    },
    ESFP: { 
      name: "Fruity Fresh", 
      emoji: "🎭",
      scent: "กลิ่นผลไม้สดชื่น เต็มเปี่ยม",
      desc: "บุคลิกประเภท Entertainer - จิตแจ่มใจสดชื่น มนต์เสน่ห์ ชอบการทำให้คนอื่นยิ้ม ชอบความสนุกสนาน",
      color: "#F39C12"
    },
    ENFP: { 
      name: "Sweet Citrus", 
      emoji: "✨",
      scent: "กลิ่นส้มหวาน สดชื่น ร่าเรื่อง",
      desc: "บุคลิกประเภท Campaigner - ห่วงใจ สนใจหลายสิ่ง ตรงไปตรงมา พลวัต กระตุ้นกิจกรรม",
      color: "#3498DB"
    },
    ENTP: { 
      name: "Bold Wood", 
      emoji: "💡",
      scent: "กลิ่นไม้เข้มข้น กล้าหาญ",
      desc: "บุคลิกประเภท Debater - เฉลียวฉล้าด ชอบความท้าทาย ไม่สนใจอำนาจ ชอบการถกเถียง",
      color: "#2ECC71"
    },
    ESTJ: { 
      name: "Classic Cologne", 
      emoji: "👔",
      scent: "กลิ่นคลาสสิก ผู้นำ เป็นระเบียบ",
      desc: "บุคลิกประเภท Logistician - ผู้นำที่ยุติธรรมเมตตา เข้มงวด มีลักษณะผู้บัญชาการ วาจาตรงไปตรงมา",
      color: "#34495E"
    },
    ESFJ: { 
      name: "Floral Bloom", 
      emoji: "🤝",
      scent: "กลิ่นดอกไม้บาน อบอุ่น สังคม",
      desc: "บุคลิกประเภท Consul - สนใจใจเพื่อน อบอุ่น เสริมสร้าง ปรัชญาดำเนินการสำเร็จ",
      color: "#E91E63"
    },
    ENFJ: { 
      name: "Warm Floral", 
      emoji: "👑",
      scent: "กลิ่นดอกไม้อบอุ่น ผู้นำ",
      desc: "บุคลิกประเภท Protagonist - พิสูจน์ว่า นำทาง ชอบสนับสนุนและส่งเสริมคนอื่น",
      color: "#D35400"
    },
    ENTJ: { 
      name: "Strong Oud", 
      emoji: "🏆",
      scent: "กลิ่นอูดแข็งแกร่ง อำนาจ",
      desc: "บุคลิกประเภท Commander - นายพล ผู้นำธรรมชาติ ตัดสินใจอย่างไว เป็นกลาง ความเต็มใจ",
      color: "#8B4513"
    }
  };

  const getMBTI = () => {
    const e = scores.E > scores.I ? "E" : "I";
    const s = scores.S > scores.N ? "S" : "N";
    const t = scores.T > scores.F ? "T" : "F";
    const j = scores.J > scores.P ? "J" : "P";
    return e + s + t + j;
  };

  const handleAnswer = (type) => {
    const newScores = { ...scores };
    newScores[type[0]]++;
    setScores(newScores);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentQ(0);
    setScores({ E: 0, I: 0, N: 0, S: 0, F: 0, T: 0, J: 0, P: 0 });
    setShowResult(false);
  };

  const mbti = getMBTI();
  const result = perfumes[mbti];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #1F304D 0%, #000000 100%)",
      padding: "2rem 0",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 1rem" }}>
        {!showResult ? (
          <>
            {/* Header */}
            <div style={{
              textAlign: "center",
              marginBottom: "2rem",
              color: "WHITE"
            }}>
              <h1 style={{ fontSize: "32px", margin: "0 0 8px 0", fontWeight: "bold", color: "white" }}>
                🧠 MBTI Scent Quiz
              </h1>
              <p style={{ fontSize: "14px", opacity: 0.9, margin: 0 }}>
                ค้นหา Scent ที่เหมาะกับบุคลิกของคุณ
              </p>
            </div>

            {/* Progress Bar */}
            <div style={{ marginBottom: "2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                <span style={{ fontSize: "13px", color: "#DAE3EB", fontWeight: 500 }}>
                  ข้อที่ {currentQ + 1} / {questions.length}
                </span>
              </div>
              <div style={{
                height: "8px",
                background: "rgba(255,255,255,0.3)",
                borderRadius: "10px",
                overflow: "hidden"
              }}>
                <div style={{
                  height: "100%",
                  background: "#DAE3EB",
                  width: `${((currentQ + 1) / questions.length) * 100}%`,
                  transition: "width 0.3s ease",
                  borderRadius: "10px"
                }} />
              </div>
            </div>

            {/* Question Card */}
            <div style={{
              background: "#DAE3EB",
              borderRadius: "16px",
              padding: "2rem",
              marginBottom: "1.5rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
            }}>
              <p style={{
                fontSize: "18px",
                fontWeight: 600,
                margin: "0 0 1.5rem 0",
                color: "#333",
                lineHeight: "1.6"
              }}>
                {questions[currentQ].q}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <button
                  onClick={() => handleAnswer(questions[currentQ].type)}
                  style={{
                    padding: "14px 16px",
                    background: "linear-gradient(135deg, #1F304D 0%, #1F304D 100%)",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "14px",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "#DAE3EB",
                    fontWeight: 500,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 16px rgba(102, 126, 234, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.4)";
                  }}
                >
                  ✓ {questions[currentQ].a}
                </button>
                <button
                  onClick={() => handleAnswer(questions[currentQ].type.reverse())}
                  style={{
                    padding: "14px 16px",
                    background: "#DAE3EB",
                    border: "2px solid #1F304D",
                    borderRadius: "10px",
                    fontSize: "14px",
                    cursor: "pointer",
                    textAlign: "left",
                    color: "#1F304D",
                    fontWeight: 500,
                    transition: "transform 0.2s, background 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.background = "#f0f4ff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.background = "#DAE3EB";
                  }}
                >
                  ✓ {questions[currentQ].b}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div style={{
            textAlign: "center",
            animation: "fadeIn 0.6s ease"
          }}>
            {/* MBTI Result */}
            <div style={{
              background: "#DAE3EB",
              borderRadius: "20px",
              padding: "2rem",
              marginBottom: "1.5rem",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)"
            }}>
              <div style={{ marginBottom: "2rem" }}>
                <div style={{
                  fontSize: "60px",
                  marginBottom: "12px"
                }}>
                  {result.emoji}
                </div>
                <h1 style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  margin: "0 0 8px 0",
                  color: result.color
                }}>
                  {mbti}
                </h1>
                <p style={{
                  fontSize: "14px",
                  color: "#999",
                  margin: 0
                }}>
                  บุคลิกประเภทของคุณ
                </p>
              </div>

              {/* Perfume Info */}
              <div style={{
                background: `${result.color}15`,
                borderLeft: `4px solid ${result.color}`,
                padding: "1.5rem",
                borderRadius: "8px",
                marginBottom: "1.5rem",
                textAlign: "left"
              }}>
                <p style={{
                  fontSize: "20px",
                  fontWeight: 600,
                  margin: "0 0 8px 0",
                  color: result.color
                }}>
                  {result.name}
                </p>
                <p style={{
                  fontSize: "13px",
                  color: "#666",
                  margin: "0 0 12px 0",
                  fontStyle: "italic"
                }}>
                  💨 {result.scent}
                </p>
                <p style={{
                  fontSize: "14px",
                  color: "#333",
                  margin: 0,
                  lineHeight: "1.8"
                }}>
                  {result.desc}
                </p>
              </div>
            </div>

            {/* Retry Button */}
            <button
              onClick={resetTest}
              style={{
                padding: "14px 32px",
                background: "#DAE3EB",
                border: "none",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                color: "#1F304D",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "transform 0.2s"
              }}
              onMouseEnter={(e) => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.target.style.transform = "translateY(0)"}
            >
              🔄 ทำแบบทดสอบใหม่
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}