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
      scent: "กลิ่นไม้สีแนว เข้มข้น อบอุ่น",
      desc: "บุคลิกประเภท Logistician - มีความรับผิดชอบสูง จริงใจ และเป็นระเบียบ สมบูรณ์ แข็งแกร่ง ตรงต่อเวลา" 
    },
    ISFJ: { 
      name: "Gentle Peony", 
      scent: "กลิ่นดอกไม้นุ่มนวล อบอุ่น",
      desc: "บุคลิกประเภท Defender - ใจดี หมั่นเพียร ค่อนข้างเงียบ แต่รักษาสัมพันธ์ที่สำคัญด้วยใจแน่วแน่" 
    },
    INFJ: { 
      name: "Mystic Iris", 
      scent: "กลิ่นลึกลับ สะท้อนใจ",
      desc: "บุคลิกประเภท Advocate - มีความเห็นแบบลึกซึ้ง มีอุดมการณ์สูง คิดเฉพาะตัว ลึกลับ แต่กัลยามิตรและห่วงใจคน" 
    },
    INTJ: { 
      name: "Dark Oud", 
      scent: "กลิ่นอูด เข้มข้น เมืองหลวง",
      desc: "บุคลิกประเภท Architect - ไฟฟ้า มีวิสัยทัศน์ ปฏิเสธความเห็นที่ไม่มีฐานการวิจารณ์ และพยายามแข่งเพื่อความเป็นเลิศ" 
    },
    ISTP: { 
      name: "Fresh Citrus", 
      scent: "กลิ่นส้มสดชื่น กีฬา",
      desc: "บุคลิกประเภท Virtuoso - นิยมตัวเอง ชอบความอิสระ ตรรกะ เงียบ แต่มีความสามารถในการแก้ปัญหา" 
    },
    ISFP: { 
      name: "Soft Floral", 
      scent: "กลิ่นดอกไม้อ่อนไหว นิ่มนวล",
      desc: "บุคลิกประเภท Adventurer - อ่อนไหว ศิลปี มีความรักษา แต่ไม่ชอบความขัดแย้ง ทำตามหัวใจ" 
    },
    INFP: { 
      name: "Sweet Lavender", 
      scent: "กลิ่นลาเวนเดอร์หวาน ฝันเห็น",
      desc: "บุคลิกประเภท Mediator - เป็นอุดมคติ ฝันเห็น ทำตามค่านิยม ศิลปี ไม่สนใจเงิน เต็มไปด้วยความรักและความหวัง" 
    },
    INTP: { 
      name: "Minimalist Musk", 
      scent: "กลิ่นมัสก์ เรียบง่าย ลึก",
      desc: "บุคลิกประเภท Logician - วิเคราะห์สิ่งต่างๆ บ่อยครั้งที่อยู่ในคิด ชอบการสืบสอนและแก้ปัญหาที่ซับซ้อน" 
    },
    ESTP: { 
      name: "Spicy Amber", 
      scent: "กลิ่นเผ็ดร้อน แอมเบอร์",
      desc: "บุคลิกประเภท Entrepreneur - สำรวจ เสี่ยง ชอบสิ่งใหม่ สูตร ต่อสู้ ดูแลตนเองดี" 
    },
    ESFP: { 
      name: "Fruity Fresh", 
      scent: "กลิ่นผลไม้สดชื่น เต็มเปี่ยม",
      desc: "บุคลิกประเภท Entertainer - จิตแจ่มใจสดชื่น มนต์เสน่ห์ ชอบการทำให้คนอื่นยิ้ม ชอบความสนุกสนาน" 
    },
    ENFP: { 
      name: "Sweet Citrus", 
      scent: "กลิ่นส้มหวาน สดชื่น ร่าเรื่อง",
      desc: "บุคลิกประเภท Campaigner - ห่วงใจ สนใจหลายสิ่ง ตรงไปตรงมา พลวัต กระตุ้นกิจกรรม" 
    },
    ENTP: { 
      name: "Bold Wood", 
      scent: "กลิ่นไม้เข้มข้น กล้าหาญ",
      desc: "บุคลิกประเภท Debater - เฉลียวฉล้าด ชอบความท้าทาย ไม่สนใจอำนาจ ชอบการถกเถียง" 
    },
    ESTJ: { 
      name: "Classic Cologne", 
      scent: "กลิ่นคลาสสิก ผู้นำ เป็นระเบียบ",
      desc: "บุคลิกประเภท Logistician - ผู้นำที่ยุติธรรมเมตตา เข้มงวด มีลักษณะผู้บัญชาการ วาจาตรงไปตรงมา" 
    },
    ESFJ: { 
      name: "Floral Bloom", 
      scent: "กลิ่นดอกไม้บาน อบอุ่น สังคม",
      desc: "บุคลิกประเภท Consul - สนใจใจเพื่อน อบอุ่น เสริมสร้าง ปรัชญาดำเนินการสำเร็จ" 
    },
    ENFJ: { 
      name: "Warm Floral", 
      scent: "กลิ่นดอกไม้อบอุ่น ผู้นำ",
      desc: "บุคลิกประเภท Protagonist - พิสูจน์ว่า นำทาง ชอบสนับสนุนและส่งเสริมคนอื่น" 
    },
    ENTJ: { 
      name: "Strong Oud", 
      scent: "กลิ่นอูดแข็งแกร่ง อำนาจ",
      desc: "บุคลิกประเภท Commander - นายพล ผู้นำธรรมชาติ ตัดสินใจอย่างไว เป็นกลาง ความเต็มใจ" 
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
    <div style={{ padding: "2rem 0", maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      {!showResult ? (
        <>
          <div style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 500 }}>ทดสอบบุคลิก MBTI</h2>
              <span style={{ fontSize: "13px", color: "#666" }}>
                {currentQ + 1} / {questions.length}
              </span>
            </div>
            <div style={{
              height: "6px",
              background: "#e0e0e0",
              borderRadius: "4px",
              overflow: "hidden"
            }}>
              <div style={{
                height: "100%",
                background: "#2196F3",
                width: `${((currentQ + 1) / questions.length) * 100}%`,
                transition: "width 0.3s ease"
              }} />
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid #e0e0e0", borderRadius: "8px", padding: "1.5rem", marginBottom: "1.5rem" }}>
            <p style={{ fontSize: "15px", fontWeight: 500, margin: "0 0 1.5rem 0", color: "#000" }}>
              {questions[currentQ].q}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                onClick={() => handleAnswer(questions[currentQ].type)}
                style={{
                  padding: "12px 16px",
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s",
                  color: "#000"
                }}
                onMouseEnter={(e) => e.target.style.background = "#f5f5f5"}
                onMouseLeave={(e) => e.target.style.background = "#fff"}
              >
                ก) {questions[currentQ].a}
              </button>
              <button
                onClick={() => handleAnswer(questions[currentQ].type.reverse())}
                style={{
                  padding: "12px 16px",
                  background: "#fff",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  fontSize: "14px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s",
                  color: "#000"
                }}
                onMouseEnter={(e) => e.target.style.background = "#f5f5f5"}
                onMouseLeave={(e) => e.target.style.background = "#fff"}
              >
                ข) {questions[currentQ].b}
              </button>
            </div>
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{ fontSize: "28px", fontWeight: 500, margin: "0 0 8px 0", color: "#000" }}>
              {mbti}
            </h1>
            <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>บุคลิกประเภทของคุณ</p>
          </div>

          <div style={{
            background: "#fff",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "1.5rem",
            marginBottom: "1.5rem"
          }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <p style={{ fontSize: "18px", fontWeight: 500, margin: "0 0 8px 0", color: "#000" }}>
                🌸 {result.name}
              </p>
              <p style={{ fontSize: "13px", color: "#999", lineHeight: "1.6", margin: 0 }}>
                {result.scent}
              </p>
            </div>

            <div style={{ borderTop: "1px solid #e0e0e0", paddingTop: "1.5rem" }}>
              <p style={{ fontSize: "13px", fontWeight: 500, color: "#666", marginBottom: "8px" }}>
                ✨ ลักษณะบุคลิก
              </p>
              <p style={{ fontSize: "14px", color: "#333", lineHeight: "1.7", margin: 0 }}>
                {result.desc}
              </p>
            </div>
          </div>

          <button
            onClick={resetTest}
            style={{
              padding: "12px 24px",
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
              color: "#000",
              transition: "all 0.2s"
            }}
            onMouseEnter={(e) => e.target.style.background = "#f5f5f5"}
            onMouseLeave={(e) => e.target.style.background = "#fff"}
          >
            ทำแบบทดสอบใหม่
          </button>
        </div>
      )}
    </div>
  );
}