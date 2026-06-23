import React, { useState } from 'react';

export default function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ E: 0, I: 0, N: 0, S: 0, F: 0, T: 0, J: 0, P: 0 });
  const [showResult, setShowResult] = useState(false);

const MBTIIcons = {
  ISTJ: <img src="/icons/ISTJ.png" alt="ISTJ" style={{ width: "120px", height: "120px" }} />,
  ISFJ: <img src="/icons/ISFJ.png" alt="ISFJ" style={{ width: "120px", height: "120px" }} />,
  INFJ: <img src="/icons/INFJ.png" alt="INFJ" style={{ width: "120px", height: "120px" }} />,
  INTJ: <img src="/icons/INTJ.png" alt="INTJ" style={{ width: "120px", height: "120px" }} />,
  ISTP: <img src="/icons/ISTP.png" alt="ISTP" style={{ width: "120px", height: "120px" }} />,
  ISFP: <img src="/icons/ISFP.png" alt="ISFP" style={{ width: "120px", height: "120px" }} />,
  INFP: <img src="/icons/INFP.png" alt="INFP" style={{ width: "120px", height: "120px" }} />,
  INTP: <img src="/icons/INTP.png" alt="INTP" style={{ width: "120px", height: "120px" }} />,
  ESTP: <img src="/icons/ESTP.png" alt="ESTP" style={{ width: "120px", height: "120px" }} />,
  ESFP: <img src="/icons/ESFP.png" alt="ESFP" style={{ width: "120px", height: "120px" }} />,
  ENFP: <img src="/icons/ENFP.png" alt="ENFP" style={{ width: "120px", height: "120px" }} />,
  ENTP: <img src="/icons/ENTP.png" alt="ENTP" style={{ width: "120px", height: "120px" }} />,
  ESTJ: <img src="/icons/ESTJ.png" alt="ESTJ" style={{ width: "120px", height: "120px" }} />,
  ESFJ: <img src="/icons/ESFJ.png" alt="ESFJ" style={{ width: "120px", height: "120px" }} />,
  ENFJ: <img src="/icons/ENFJ.png" alt="ENFJ" style={{ width: "120px", height: "120px" }} />,
  ENTJ: <img src="/icons/ENTJ.png" alt="ENTJ" style={{ width: "120px", height: "120px" }} />,
};
  
const questions = [
    {
      q: "คุณชอบใช้เวลาในการทำอะไร...",
      a: "ออกไปโต้ตอบคนอื่น หรือกิจกรรมสังคม",
      b: "นั่งอยู่เดี่ยว อ่านหนังสือ หรือคิดเรื่องราวต่างๆ",
      type: ["E", "I"]
    },
    {
      q: "เมื่อเรียนรู้เรื่องใหม่ๆ คุณชอบที่จะ...",
      a: "ทำความเข้าใจทุกรายละเอียด และข้อเท็จจริง",
      b: "มองภาพรวม ความหมาย และความเป็นไปได้",
      type: ["S", "N"]
    },
    {
      q: "เมื่อต้องตัดสินใจ คุณมักจะ...",
      a: "ใช้ตรรกะ และข้อเท็จจริง",
      b: "พิจารณาความรู้สึก และผลกระทบต่อผู้คน",
      type: ["T", "F"]
    },
    {
      q: "สำหรับการทำงานและชีวิต คุณชอบ...",
      a: "การมีแผนชัดเจน จัดระเบียบ และตรงต่อเวลา",
      b: "ความยืดหยุ่น ไม่ตายตัว และเปิดรับความเป็นไปได้",
      type: ["J", "P"]
    },
    {
      q: "เมื่อต้องทำงานกลุ่ม คุณรู้สึกว่า...",
      a: "ชอบทำงานเป็นทีม พูดคุยแลกเปลี่ยนอยู่เสมอ",
      b: "ชอบทำงานคนเดียว หรือในกลุ่มเล็กๆ",
      type: ["E", "I"]
    },
    {
      q: "คุณมักให้ความสนใจกับ...",
      a: "สิ่งที่เห็นได้ วัดได้ สัมผัสได้ในปัจจุบัน",
      b: "ธีมที่ลึกซึ้ง ความหมาย และแนวโน้มอนาคต",
      type: ["S", "N"]
    },
    {
      q: "เมื่อเกิดข้อขัดแย้ง คุณมักจะ...",
      a: "ค้นหาวิธีแก้ไขที่ยุติธรรม และเป็นกลาง",
      b: "พยายามเข้าใจความรู้สึกของทุกคน",
      type: ["T", "F"]
    },
    {
      q: "เมื่อมีโปรเจคใหม่เข้ามา คุณเลือกที่จะ...",
      a: "วางแผนรายละเอียดก่อน แล้วจึงลงมือทำ",
      b: "เริ่มทำเลย และเรียนรู้ระหว่างทำ",
      type: ["J", "P"]
    },
    {
      q: "อะไร...ทำให้คุณมีพลังมากขึ้น",
      a: "การอยู่กับคนอื่น และกิจกรรมกลุ่มร่วมกัน",
      b: "เวลาคนเดียว การไตร่ตรอง และความเงียบสงบ",
      type: ["E", "I"]
    },
    {
      q: "คุณมักจะจำเรื่องใด...ได้ดีที่สุด",
      a: "ข้อมูลเฉพาะ วันที่ ตัวเลข สิ่งที่เกิดจริง",
      b: "ความหมาย บริบท และความเชื่อมโยง",
      type: ["S", "N"]
    },
    {
      q: "เมื่อต้องคำแนะนำ คุณมักจะ...",
      a: "บอกความจริง โดยไม่หวงแหน",
      b: "ค่อยเป็นค่อยไป พิจารณาความรู้สึก",
      type: ["T", "F"]
    },
    {
      q: "คุณนิยมวิธีการทำงานแบบใด...",
      a: "ชอบความชัดเจน กำหนดเวลา และความเป็นระเบียบ",
      b: "ชอบความยืดหยุ่น และปรับเปลี่ยนตามสถานการณ์",
      type: ["J", "P"]
    },
    {
      q: "ในงานปาร์ตี้ บทบาทของคุณ คือ....",
      a: "นักเล่าเรื่องราว แลกเปลี่ยน และสร้างความสนุกสนาน",
      b: "นังฟังนั่งเงียบ ฟังเล่าคนอื่น หรืออยากออกไปที่เงียบๆ ไวๆ",
      type: ["E", "I"]
    },
    {
      q: "อนาคตที่น่าสนใจสำหรับคุณ คือ...",
      a: "ความแน่นอน ปลอดภัย และเป็นไปได้จริง",
      b: "การเต็มไปด้วยความเป็นไปได้ใหม่ๆ และเปลี่ยนแปลง",
      type: ["S", "N"]
    },
    {
      q: "คุณมีความเชื่ออยากแน่วแน่นว่า...",
      a: "หลักการ และตรรกะสำคัญกว่ากำลังใจ",
      b: "ความรู้สึก และหลักการนั้นเท่าเทียมกัน",
      type: ["T", "F"]
    },
    {
      q: "งานที่ดีที่สุดสำหรับคุณ คือ....",
      a: "งานที่มีเป้าหมายชัดเจน กำหนดเวลา ประเมินความสำเร็จได้",
      b: "งานที่มีเสรีภาพ ท้าทาย เรียนรู้อย่างต่อเนื่อง",
      type: ["J", "P"]
    }
  ];

  const perfumes = {
    ISTJ: { 
      name: "Logistician", 
      emoji: "🏛️",
      scent: "An explosion of joyful energy. Mouth-watering peach, lemon, and marigold create an uplifting aura, while a vibrant heart of jasmine and cinnamon dances over a rich base of precious woods.",
      desc: "<strong>บุคลิกประเภท - นักคำนวณ</strong><br/>นิยามของความเที่ยงตรงและความรับผิดชอบที่มั่นคงดั่งรากฐานขององค์กร ให้ความสำคัญกับข้อเท็จจริง ประสบการณ์ และการรักษามาตรฐานที่ได้รับการพิสูจน์แล้วว่าดีที่สุด",
      color: "#D4A574"
    },
    ISFJ: { 
      name: "Defender", 
      emoji: "🛡️",
      scent: "A devoted, heartwarming embrace of pure comfort. Bright citrus and rose bloom into a nurturing heart of gentle jasmine, iris, and cedarwood, settling over a cozy, protective base of sweet chocolate and vanilla.",
      desc: "<strong>บุคลิกประเภท - ผู้ปกป้อง</strong><br/>ผู้ดูแลความเรียบร้อยที่มีความละเอียดรอบคอบและใส่ใจในทุกรายละเอียดของความสัมพันธ์ มุ่งเน้นการสนับสนุนเบื้องหลังอย่างเป็นระบบเพื่อสร้างความมั่นคงและสงบสุขให้แก่ส่วนรวม",
      color: "#E8B4D4"
    },
    INFJ: { 
      name: "Advocate", 
      emoji: "👁️‍🗨️",
      scent: "A serene meditation in a misty garden. Bright bergamot clears the mind, leading to an ethereal heart of green tea, orange flower, and a whisper of chocolate, all grounded by cedarwood for profound peace.",
      desc: "<strong>บุคลิกประเภท - นักสนับสนุน</strong><br/>ผู้นำทางจิตวิญญาณที่ใช้ความเข้าใจในมนุษย์อย่างลึกซึ้งในการขับเคลื่อนความเปลี่ยนแปลงเชิงบวก มุ่งหาแก่นแท้ของความสัมพันธ์และดำรงตัวตนอย่างมีระดับท่ามกลางความซับซ้อนของโลก",
      color: "#9B7BA0"
    },
    INTJ: { 
      name: "Architect", 
      emoji: "♟️",
      scent: "A masterclass in deliberate design. Calculated spices and rose establish a commanding presence, unlocking an unyielding heart of rare agarwood. A minimalist foundation of amber and tonka ensures enduring focus.",
      desc: "<strong>บุคลิกประเภท - ผู้มีเหตุผล</strong><br/>นักยุทธศาสตร์ผู้ขับเคลื่อนโลกด้วยวิสัยทัศน์ระยะยาวและโครงสร้างเหตุผลที่สมบูรณ์แบบ รักความสันโดษเพื่อใช้เวลาขัดเกลาแผนงานให้ไร้ที่ติ และเชื่อมั่นในมาตรฐานความสำเร็จที่สูงกว่าค่าเฉลี่ย",
      color: "#2C2C2C"
    },
    ISTP: { 
      name: "Virtuoso", 
      emoji: "⚙️",
      scent: "A calculated mastery of raw mechanics. Sharp bergamot and saffron spark tactical focus, unfolding into a rugged heart of leather and amber over an independent, pragmatic foundation of patchouli, oakmoss, and oudh.",
      desc: "<strong>บุคลิกประเภท - ผู้มีความสามารถโดดเด่น</strong><br/>นักแก้ปัญหาเชิงเทคนิคที่เน้นความเรียบง่ายและประสิทธิภาพสูงสุดในสถานการณ์จริง ใช้ความสงบและการวิเคราะห์ที่เฉียบไวในการจัดการอุปสรรคตรงหน้าอย่างเป็นมืออาชีพ",
      color: "#FF9500"
    },
    ISFP: { 
      name: "Adventurer", 
      emoji: "🎨",
      scent: "A deeply personal, poetic retreat into unfiltered expression. Creamy milk and ambrette spark a tranquil, imaginative haven, unfolding into a soft, artistic heart of muguet, violet, and jasmine over a cozy foundation of comforting vanilla.",
      desc: "<strong>บุคลิกประเภท - นักผจญภัย</strong><br/>ศิลปินผู้สื่อสารผ่านการกระทำและสุนทรียภาพในทุกจังหวะชีวิต มีความละเอียดอ่อนต่อประสบการณ์ปัจจุบันและสร้างสรรค์ผลงานที่สะท้อนถึงรสนิยมที่เป็นเอกลักษณ์เฉพาะตัว",
      color: "#F4D03F"
    },
    INFP: { 
      name: "Mediator", 
      emoji: "🦋",
      scent: "A soft-focus romance like a warm embrace. Gentle geranium drifts into a nostalgic, powdery heart of rose, anchored by amber and cedarwood to create a comforting, lyrical sanctuary.",
      desc: "<strong>บุคลิกประเภท - ผู้ไกล่เกลี่ย</strong><br/>จิตวิญญาณเสรีผู้ยึดถือความสัตย์จริงต่อความเชื่อมั่นภายในเป็นเข็มทิศในการดำเนินชีวิต ให้คุณค่ากับความหมายที่ซ่อนอยู่และมุ่งสร้างสรรค์งานที่สะท้อนตัวตนอย่างประณีตและจริงใจ",
      color: "#B19CD9"
    },
    INTP: { 
      name: "Logician", 
      emoji: "🧪",
      scent: "An intellectual blueprint of pure clarity. Crisp bergamot sparks analytical insight, yielding to a precise heart of fluid jasmine and plush musk. Vanilla and earthy oakmoss establish a grounded, logical conclusion.",
      desc: "<strong>บุคลิกประเภท - นักตรรกะ</strong><br/>นักคิดเชิงนามธรรมผู้หลงใหลในการรื้อถอนและสร้างทฤษฎีใหม่ภายใต้ความเงียบเชียบ มีระบบตรรกะที่เป็นอิสระจากกรอบเดิมๆ มุ่งเน้นความถูกต้องของข้อมูลมากกว่าความพึงพอใจของสังคม",
      color: "#95A5A6"
    },
    ESTP: { 
      name: "Entrepreneur", 
      emoji: "🌪️",
      scent: "A high-voltage pulse for the night. High-energy bergamot and mint ignite a provocative heart of spices and heliotrope, settling into an addictive, sweet glow of vanilla and amber under city lights.",
      desc: "<strong>บุคลิกประเภท - ผู้ประกอบการ</strong><br/>นักบริหารความเสี่ยงผู้เชี่ยวชาญในการคว้าโอกาสและตอบโต้ต่อสถานการณ์ที่รวดเร็ว มีทักษะในการเจรจาที่เป็นเลิศและมุ่งมั่นที่จะนำพาธุรกิจไปสู่ความสำเร็จผ่านการลงมือทำจริง",
      color: "#E74C3C"
    },
    ESFP: { 
      name: "Entertainer", 
      emoji: "🥂",
      scent: "An infectious, spotlight-stealing burst of joy. Playful strawberry and lemon ignite an energetic welcome, unfolding into a theatrical heart of marshmallow and pastry cream over sweet vanilla and sugar.",
      desc: "<strong>บุคลิกประเภท - ผู้มอบความบันเทิง</strong><br/>ผู้สร้างปฏิสัมพันธ์ที่มีเสน่ห์และพลังขับเคลื่อนในการสร้างบรรยากาศเชิงบวก มีความเชี่ยวชาญในการเข้าถึงผู้คนและเปลี่ยนประสบการณ์ธรรมดาให้เป็นจดหมายเหตุที่น่าจดจำ",
      color: "#F39C12"
    },
    ENFP: { 
      name: "Campaigner", 
      emoji: "🌈",
      scent: "A vibrant burst of boundless enthusiasm. Zesty citrus, black currant, and mint spark an uplifting, free-spirited adventure, opening a warm heart of joyful peach and jasmine. Sweet amber leaves an unforgettable, deeply connecting impression.",
      desc: "<strong>บุคลิกประเภท - นักรณรงค์</strong><br/>นักสร้างสรรค์ผู้มีวิสัยทัศน์ที่สดใหม่และพลังในการเชื่อมโยงโอกาสที่คาดไม่ถึงเข้าด้วยกัน รักอิสระในการสำรวจแนวคิดที่หลากหลายและสร้างบรรยากาศที่เต็มไปด้วยความเป็นไปได้ใหม่ๆ",
      color: "#3498DB"
    },
    ENTP: { 
      name: "Debater", 
      emoji: "⚡",
      scent: "A provocative, fast-paced challenge. Sharp bergamot and pink pepper spark instant debate, shifting into a complex middle of ambergris and patchouli before settling over rebellious vetiver and tonka bean.",
      desc: "<strong>บุคลิกประเภท - นักโต้วาที</strong><br/>นักนวัตกรรมผู้ใช้ไหวพริบในการทำลายขีดจำกัดเดิมเพื่อสร้างโอกาสใหม่ รื่นรมย์กับการวิเคราะห์ความขัดแย้งและเปลี่ยนข้อมูลที่กระจัดกระจายให้กลายเป็นกลยุทธ์ที่เฉียบแหลม",
      color: "#2ECC71"
    },
    ESTJ: { 
      name: "Executive", 
      emoji: "📐",
      scent: "A disciplined, commanding statement of order. Structured lavender and bergamot establish clear authority, leading to a precise heart of red apple and verbena over a foundation of sandalwood and oakmoss.",
      desc: "<strong>บุคลิกประเภท - ผู้บริหาร</strong><br/>นักบริหารที่ยึดถือระเบียบปฏิบัติและผลสัมพฤติที่ชัดเจนเป็นที่ตั้ง มีความสามารถในการจัดสรรทรัพยากรและบุคคลอย่างมีประสิทธิภาพ เพื่อบรรลุเป้าหมายในกรอบเวลาที่กำหนด",
      color: "#34495E"
    },
    ESFJ: { 
      name: "Consul", 
      emoji: "🤝",
      scent: "Universally loved and beautifully approachable. Sparkling grapefruit provides an inviting welcome, blooming into a pleasing heart of jasmine and crisp quince, over a clean foundation of cedarwood and musk.",
      desc: "<strong>บุคลิกประเภท - ผู้ให้คำปรึกษา</strong><br/>ผู้เชี่ยวชาญด้านการจัดการความสัมพันธ์ที่สร้างความแข็งแกร่งให้แก่เครือข่ายสังคมและองค์กร ให้ความสำคัญกับความร่วมมือและบรรทัดฐานที่นำพาความสำเร็จมาสู่หมู่คณะอย่างเป็นรูปธรรม",
      color: "#E91E63"
    },
    ENFJ: { 
      name: "Protagonist", 
      emoji: "👑",
      scent: "An inspiring, radiant call to guide others. Vibrant bergamot sparks a compassionate aura, opening a harmonious heart of empathetic ylang-yllang, rose, and violet. A selfless foundation of musk and vanilla unites everyone in shared purpose.",
      desc: "<strong>บุคลิกประเภท - ผู้เป็นตัวเอก</strong><br/>ผู้ทรงอิทธิพลทางความคิดที่สร้างแรงบันดาลใจผ่านความเห็นอกเห็นใจและจริยธรรมที่มั่นคง มีทักษะในการประสานความร่วมมือและดึงศักยภาพสูงสุดของผู้คนออกมาเพื่อเป้าหมายที่เหนือกว่า",
      color: "#D35400"
    },
    ENTJ: { 
      name: "Commander", 
      emoji: "🦅",
      scent: "Energetic apple and mandarin meet a striking heart of ginger and sea salt, balancing heat with a coastal chill. A base of vetiver and moss adds a steady, unconventional strength.",
      desc: "<strong>บุคลิกประเภท - ผู้บัญชาการ</strong><br/>ผู้นำที่เกิดมาเพื่อบริหารจัดการความเปลี่ยนแปลงและตัดสินใจในจังหวะวิกฤต มุ่งเน้นผลลัพธ์ที่จับต้องได้และการขยายอาณาจักรทางความคิดผ่านโครงสร้างที่มีประสิทธิภาพสูงสุด",
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
                }}
                  dangerouslySetInnerHTML={{ __html: result.desc }} />
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