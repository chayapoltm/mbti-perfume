import React, { useState } from 'react';

const MBTIIcons = {
  ISTJ: <img src="/icons/ISTJ.png" alt="ISTJ" style={{ width: "80px", height: "80px" }} />,
  ISFJ: <img src="/icons/ISFJ.png" alt="ISFJ" style={{ width: "80px", height: "80px" }} />,
  INFJ: <img src="/icons/INFJ.png" alt="INFJ" style={{ width: "80px", height: "80px" }} />,
  INTJ: <img src="/icons/INTJ.png" alt="INTJ" style={{ width: "80px", height: "80px" }} />,
  ISTP: <img src="/icons/ISTP.png" alt="ISTP" style={{ width: "80px", height: "80px" }} />,
  ISFP: <img src="/icons/ISFP.png" alt="ISFP" style={{ width: "80px", height: "80px" }} />,
  INFP: <img src="/icons/INFP.png" alt="INFP" style={{ width: "80px", height: "80px" }} />,
  INTP: <img src="/icons/INTP.png" alt="INTP" style={{ width: "80px", height: "80px" }} />,
  ESTP: <img src="/icons/ESTP.png" alt="ESTP" style={{ width: "80px", height: "80px" }} />,
  ESFP: <img src="/icons/ESFP.png" alt="ESFP" style={{ width: "80px", height: "80px" }} />,
  ENFP: <img src="/icons/ENFP.png" alt="ENFP" style={{ width: "80px", height: "80px" }} />,
  ENTP: <img src="/icons/ENTP.png" alt="ENTP" style={{ width: "80px", height: "80px" }} />,
  ESTJ: <img src="/icons/ESTJ.png" alt="ESTJ" style={{ width: "80px", height: "80px" }} />,
  ESFJ: <img src="/icons/ESFJ.png" alt="ESFJ" style={{ width: "80px", height: "80px" }} />,
  ENFJ: <img src="/icons/ENFJ.png" alt="ENFJ" style={{ width: "80px", height: "80px" }} />,
  ENTJ: <img src="/icons/ENTJ.png" alt="ENTJ" style={{ width: "80px", height: "80px" }} />,
};

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, N: 0, S: 0, F: 0, T: 0, J: 0, P: 0 });
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "ในการพบปะคนใหม่ คุณมักจะ...",
      a: "เดินเข้าไปเริ่มบทสนทนาอย่างสดชื่น",
      b: "รอฟังให้คนอื่นเริ่มบทสนทนา",
      type: ["E", "I"]
    },
    {
      q: "คุณชอบที่จะ...",
      a: "มุ่งเน้นไปที่ข้อเท็จจริง และรายละเอียดจริง",
      b: "ถาม 'แล้วจะเป็นไปอย่างไร' และคิดถึงความเป็นไปได้",
      type: ["S", "N"]
    },
    {
      q: "เมื่อตัดสินใจสำคัญ คุณมักจะ...",
      a: "วิเคราะห์ข้อมูล และตรรกะ",
      b: "พิจารณาว่ามันจะส่งผลต่อความรู้สึกของคนอื่น",
      type: ["T", "F"]
    },
    {
      q: "สำหรับการทำงานและชีวิต คุณชอบ...",
      a: "มีแผนและกำหนดเวลาที่ชัดเจน",
      b: "มีความยืดหยุ่นและเปิดต่อโอกาสใหม่",
      type: ["J", "P"]
    },
    {
      q: "ในการชุมนุม คุณมักจะ...",
      a: "ได้พลังมาจากการโต้ตอบกับคนอื่น",
      b: "ต้องการเวลาเพื่อตัวเองหลังจากหลายวัน",
      type: ["E", "I"]
    },
    {
      q: "คุณมักจะสนใจ...",
      a: "สิ่งที่สามารถสัมผัส เห็น และวัดได้",
      b: "ธีมที่ลึกซึ้ง ความหมาย และแนวโน้มอนาคต",
      type: ["S", "N"]
    },
    {
      q: "เมื่อมีข้อขัดแย้ง คุณจะ...",
      a: "มองหาวิธีแก้ปัญหาที่ยุติธรรม และสมควร",
      b: "พยายามทำให้ทุกคนรู้สึกได้ยิน และเข้าใจ",
      type: ["T", "F"]
    },
    {
      q: "คุณมักจะเลือก...",
      a: "ลงมือทำ และเรียนรู้จากประสบการณ์",
      b: "วางแผนครั้งแรก แล้วจึงเริ่มทำ",
      type: ["P", "J"]
    },
    {
      q: "คุณรู้สึกมีพลังเมื่อ...",
      a: "มีกิจกรรมมากมาย และเป็นส่วนหนึ่งของกลุ่ม",
      b: "มีเวลาเพื่อตัวเอง และคิดทำความเข้าใจสิ่งต่าง ๆ",
      type: ["E", "I"]
    },
    {
      q: "ในการเรียนรู้สิ่งใหม่ คุณชอบ...",
      a: "ลงมือปฏิบัติจริง และเข้าใจว่ามันทำงานอย่างไร",
      b: "เข้าใจทฤษฎี ลักษณะเฉพาะ และการใช้งาน",
      type: ["S", "N"]
    },
    {
      q: "ตัวเลือกไหนรู้สึกว่าเป็นคุณมากกว่า...",
      a: "ลงมือทำให้งานเสร็จโดยใช้วิธีตามวัตถุประสงค์",
      b: "พิจารณาความรู้สึก และธรรมชาติของทุกคน",
      type: ["T", "F"]
    },
    {
      q: "ในความสัมพันธ์ในการทำงาน คุณ...",
      a: "ชอบความชัดเจน กำหนดเวลา และความเป็นระเบียบ",
      b: "ชอบความยืดหยุ่น และปรับเปลี่ยนตามสถานการณ์",
      type: ["J", "P"]
    },
    {
      q: "งานปาร์ตี้ คือ สถานที่ที่คุณ...",
      a: "ออกมาเล่าเรื่องราว แลกเปลี่ยน และสนุกสนาน",
      b: "นั่งคอยให้เวลาผ่านไป หรือเดินหนีออกไปข้างนอก",
      type: ["E", "I"]
    },
    {
      q: "คุณจำได้ดีที่สุด ในเรื่อง...",
      a: "ข้อมูลเฉพาะ และรายละเอียดที่เกี่ยวข้อง",
      b: "รูปแบบ การเชื่อมต่อ และความหมายโดยรวม",
      type: ["S", "N"]
    },
    {
      q: "เมื่อให้คำวิจารณ์ คุณจะ...",
      a: "ตรงไปตรงมา และให้ข้อเท็จจริง",
      b: "ค่อยเป็นค่อยไป และคำนึงถึงผลต่อจิตใจ",
      type: ["T", "F"]
    },
    {
      q: "คุณมักจะ...",
      a: "วางแผน และรีบดำเนินการให้เสร็จ",
      b: "เปิดตัวเลือกไว้ และตรวจสอบความเป็นไปได้",
      type: ["J", "P"]
    }
  ];

  const perfumes = {
    ISTJ: { 
      name: "Amber Woods", 
      scent: "กลิ่นไม้สีแนว เข้มข้น อบอุ่น",
      desc: "บุคลิกประเภท Logistician (นักคำนวณ / ผู้ตรวจสอบ) - นิยามของความเที่ยงตรงและความรับผิดชอบที่มั่นคงดั่งรากฐานขององค์กร ให้ความสำคัญกับข้อเท็จจริง ประสบการณ์ และการรักษามาตรฐานที่ได้รับการพิสูจน์แล้วว่าดีที่สุด",
      color: "#D4A574"
    },
    ISFJ: { 
      name: "Gentle Peony", 
      scent: "กลิ่นดอกไม้นุ่มนวล อบอุ่น",
      desc: "บุคลิกประเภท Defender (ผู้ตั้งรับ / ผู้ปกป้อง) - ผู้ดูแลความเรียบร้อยที่มีความละเอียดรอบคอบและใส่ใจในทุกรายละเอียดของความสัมพันธ์ มุ่งเน้นการสนับสนุนเบื้องหลังอย่างเป็นระบบเพื่อสร้างความมั่นคงและสงบสุขให้แก่ส่วนรวม",
      color: "#E8B4D4"
    },
    INFJ: { 
      name: "Mystic Iris", 
      scent: "กลิ่นลึกลับ สะท้อนใจ",
      desc: "บุคลิกประเภท Advocate (ผู้แนะนำ / ผู้ปลอบโยน) - ผู้นำทางจิตวิญญาณที่ใช้ความเข้าใจในมนุษย์อย่างลึกซึ้งในการขับเคลื่อนความเปลี่ยนแปลงเชิงบวก มุ่งหาแก่นแท้ของความสัมพันธ์และดำรงตัวตนอย่างมีระดับท่ามกลางความซับซ้อนของโลก",
      color: "#9B7BA0"
    },
    INTJ: { 
      name: "Dark Oud", 
      scent: "กลิ่นอูด เข้มข้น เมืองหลวง",
      desc: "บุคลิกประเภท Architect (นักออกแบบ / นักวางแผน) - นักยุทธศาสตร์ผู้ขับเคลื่อนโลกด้วยวิสัยทัศน์ระยะยาวและโครงสร้างเหตุผลที่สมบูรณ์แบบ รักความสันโดษเพื่อใช้เวลาขัดเกลาแผนงานให้ไร้ที่ติ และเชื่อมั่นในมาตรฐานความสำเร็จที่สูงกว่าค่าเฉลี่ย",
      color: "#2C2C2C"
    },
    ISTP: { 
      name: "Fresh Citrus", 
      scent: "กลิ่นส้มสดชื่น กีฬา",
      desc: "บุคลิกประเภท Virtuoso (ผู้เชี่ยวชาญ / ช่างศิลป์) - นักแก้ปัญหาเชิงเทคนิคที่เน้นความเรียบง่ายและประสิทธิภาพสูงสุดในสถานการณ์จริง ใช้ความสงบและการวิเคราะห์ที่เฉียบไวในการจัดการอุปสรรคตรงหน้าอย่างเป็นมืออาชีพ",
      color: "#FF9500"
    },
    ISFP: { 
      name: "Soft Floral", 
      scent: "กลิ่นดอกไม้อ่อนไหว นิ่มนวล",
      desc: "บุคลิกประเภท Adventurer (ศิลปิน / ผู้เปี่ยมเสน่ห์) - ศิลปินผู้สื่อสารผ่านการกระทำและสุนทรียภาพในทุกจังหวะชีวิต มีความละเอียดอ่อนต่อประสบการณ์ปัจจุบันและสร้างสรรค์ผลงานที่สะท้อนถึงรสนิยมที่เป็นเอกลักษณ์เฉพาะตัว",
      color: "#F4D03F"
    },
    INFP: { 
      name: "Sweet Lavender", 
      scent: "กลิ่นลาเวนเดอร์หวาน ฝันเห็น",
      desc: "บุคลิกประเภท Mediator (ผู้ไกล่เกลี่ย / ผู้สร้างสรรค์) - จิตวิญญาณเสรีผู้ยึดถือความสัตย์จริงต่อความเชื่อมั่นภายในเป็นเข็มทิศในการดำเนินชีวิต ให้คุณค่ากับความหมายที่ซ่อนอยู่และมุ่งสร้างสรรค์งานที่สะท้อนตัวตนอย่างประณีตและจริงใจ",
      color: "#B19CD9"
    },
    INTP: { 
      name: "Minimalist Musk", 
      scent: "กลิ่นมัสก์ เรียบง่าย ลึก",
      desc: "บุคลิกประเภท Logician (นักตรรกะ / นักคิด) - นักคิดเชิงนามธรรมผู้หลงใหลในการรื้อถอนและสร้างทฤษฎีใหม่ภายใต้ความเงียบเชียบ มีระบบตรรกะที่เป็นอิสระจากกรอบเดิมๆ มุ่งเน้นความถูกต้องของข้อมูลมากกว่าความพึงพอใจของสังคม",
      color: "#95A5A6"
    },
    ESTP: { 
      name: "Spicy Amber", 
      scent: "กลิ่นเผ็ดร้อน แอมเบอร์",
      desc: "บุคลิกประเภท Entrepreneur (ผู้ประกอบการ / ผู้ชักจูง) - นักบริหารความเสี่ยงผู้เชี่ยวชาญในการคว้าโอกาสและตอบโต้ต่อสถานการณ์ที่รวดเร็ว มีทักษะในการเจรจาที่เป็นเลิศและมุ่งมั่นที่จะนำพาธุรกิจไปสู่ความสำเร็จผ่านการลงมือทำจริง",
      color: "#E74C3C"
    },
    ESFP: { 
      name: "Fruity Fresh", 
      scent: "กลิ่นผลไม้สดชื่น เต็มเปี่ยม",
      desc: "บุคลิกประเภท Entertainer (ผู้มอบความบันเทิง / นักแสดง) - ผู้สร้างปฏิสัมพันธ์ที่มีเสน่ห์และพลังขับเคลื่อนในการสร้างบรรยากาศเชิงบวก มีความเชี่ยวชาญในการเข้าถึงผู้คนและเปลี่ยนประสบการณ์ธรรมดาให้เป็นจดหมายเหตุที่น่าจดจำ",
      color: "#F39C12"
    },
    ENFP: { 
      name: "Sweet Citrus", 
      scent: "กลิ่นส้มหวาน สดชื่น ร่าเรื่อง",
      desc: "บุคลิกประเภท Campaigner (นักรณรงค์ / ผู้สร้างแรงบันดาลใจ) - นักสร้างสรรค์ผู้มีวิสัยทัศน์ที่สดใหม่และพลังในการเชื่อมโยงโอกาสที่คาดไม่ถึงเข้าด้วยกัน รักอิสระในการสำรวจแนวคิดที่หลากหลายและสร้างบรรยากาศที่เต็มไปด้วยความเป็นไปได้ใหม่ๆ",
      color: "#3498DB"
    },
    ENTP: { 
      name: "Bold Wood", 
      scent: "กลิ่นไม้เข้มข้น กล้าหาญ",
      desc: "บุคลิกประเภท Debater (นักโต้วาที / นักประดิษฐ์) - นักนวัตกรรมผู้ใช้ไหวพริบในการทำลายขีดจำกัดเดิมเพื่อสร้างโอกาสใหม่ รื่นรมย์กับการวิเคราะห์ความขัดแย้งและเปลี่ยนข้อมูลที่กระจัดกระจายให้กลายเป็นกลยุทธ์ที่เฉียบแหลม",
      color: "#2ECC71"
    },
    ESTJ: { 
      name: "Classic Cologne", 
      scent: "กลิ่นคลาสสิก ผู้นำ เป็นระเบียบ",
      desc: "บุคลิกประเภท Executive (ผู้บริหาร / ผู้จัดการ) - นักบริหารที่ยึดถือระเบียบปฏิบัติและผลสัมพฤติที่ชัดเจนเป็นที่ตั้ง มีความสามารถในการจัดสรรทรัพยากรและบุคคลอย่างมีประสิทธิภาพ เพื่อบรรลุเป้าหมายในกรอบเวลาที่กำหนด",
      color: "#34495E"
    },
    ESFJ: { 
      name: "Floral Bloom", 
      scent: "กลิ่นดอกไม้บาน อบอุ่น สังคม",
      desc: "บุคลิกประเภท Consul (ผู้ให้คำปรึกษา / ผู้ดูแล) - ผู้เชี่ยวชาญด้านการจัดการความสัมพันธ์ที่สร้างความแข็งแกร่งให้แก่เครือข่ายสังคมและองค์กร ให้ความสำคัญกับความร่วมมือและบรรทัดฐานที่นำพาความสำเร็จมาสู่หมู่คณะอย่างเป็นรูปธรรม",
      color: "#E91E63"
    },
    ENFJ: { 
      name: "Warm Floral", 
      scent: "กลิ่นดอกไม้อบอุ่น ผู้นำ",
      desc: "บุคลิกประเภท Protagonist (ผู้เป็นตัวเอก / ผู้ให้ความจริงใจ) - ผู้ทรงอิทธิพลทางความคิดที่สร้างแรงบันดาลใจผ่านความเห็นอกเห็นใจและจริยธรรมที่มั่นคง มีทักษะในการประสานความร่วมมือและดึงศักยภาพสูงสุดของผู้คนออกมาเพื่อเป้าหมายที่เหนือกว่า",
      color: "#D35400"
    },
    ENTJ: { 
      name: "Strong Oud", 
      scent: "กลิ่นอูดแข็งแกร่ง อำนาจ",
      desc: "บุคลิกประเภท Commander (ผู้บัญชาการ / ผู้นำ) - ผู้นำที่เกิดมาเพื่อบริหารจัดการความเปลี่ยนแปลงและตัดสินใจในจังหวะวิกฤต มุ่งเน้นผลลัพธ์ที่จับต้องได้และการขยายอาณาจักรทางความคิดผ่านโครงสร้างที่มีประสิทธิภาพสูงสุด",
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
                      {/* เพิ่มรูปไอคอนตรงนี้ */}
    <div style={{
      width: "100px",
      height: "100px",
      margin: "0 auto 12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {MBTIIcons[mbti]}
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