// ฐานข้อมูลหัวข้อรายสัปดาห์ (15 หน่วยการเรียนรู้ของ มสธ.)
const courseUnits = {
    net: [ // 96304 เครือข่าย
        "ความรู้เบื้องต้นการสื่อสารข้อมูล", "สถาปัตยกรรมเครือข่ายและ OSI Model", "สื่อนำสัญญาณและการส่งข้อมูล", "มาตรฐาน LAN และ Ethernet", "อุปกรณ์เครือข่าย Switch และ Router",
        "โปรโตคอล TCP/IP เบื้องต้น", "IP Addressing (IPv4/IPv6)", "การแบ่งเครือข่ายย่อย (Subnetting)", "โปรโตคอลการจัดเส้นทาง (Routing)", "เครือข่าย WAN และเทคโนโลยี",
        "เครือข่ายไร้สาย (Wi-Fi)", "ความปลอดภัยบนเครือข่ายเบื้องต้น", "การบริหารจัดการเครือข่าย (SNMP)", "แนวโน้มเทคโนโลยีเครือข่ายยุคใหม่", "สรุปประเด็นสำคัญระบบเครือข่าย"
    ],
    sys: [ // 96407 พัฒนาระบบ
        "ความรู้เบื้องต้นระบบสารสนเทศ", "วงจรการพัฒนาระบบ (SDLC)", "การวิเคราะห์ความต้องการ (Requirement)", "การสร้างแบบจำลองกระบวนการ (DFD)", "การสร้างแบบจำลองข้อมูล (ER Diagram)",
        "การออกแบบสถาปัตยกรรมระบบ", "การออกแบบส่วนติดต่อผู้ใช้ (UI/UX)", "การออกแบบฐานข้อมูล", "การเขียนโปรแกรมและพัฒนา", "การทดสอบระบบ (System Testing)",
        "การติดตั้งระบบ (Deployment)", "การบำรุงรักษาระบบ (Maintenance)", "การบริหารโครงการซอฟต์แวร์", "แนวโน้มการพัฒนาระบบ (Agile/DevOps)", "สรุปประเด็นการพัฒนาระบบ"
    ],
    sec: [ // 99402 ความปลอดภัย
        "ความปลอดภัยระบบคอมพิวเตอร์", "แนวคิด CIA Triad และภัยคุกคาม", "นโยบายความมั่นคงปลอดภัย", "การเข้ารหัสข้อมูล (Cryptography)", "การพิสูจน์ตัวตนและการเข้าถึง",
        "ความปลอดภัยของเครือข่าย (Firewall/IDS)", "ความปลอดภัยของระบบปฏิบัติการ", "ความปลอดภัยของแอปพลิเคชัน", "การจัดการไวรัสและมัลแวร์", "การบริหารความเสี่ยง (Risk Management)",
        "มาตรฐาน ISO 27001", "กฎหมายที่เกี่ยวข้อง (PDPA)", "แผนความต่อเนื่องทางธุรกิจ (BCP/DRP)", "การรับมือภัยพิบัติทางไซเบอร์", "สรุปประเด็นความปลอดภัยไซเบอร์"
    ],
    thai: [ // 10151 ไทยศึกษา
        "ลักษณะทางภูมิศาสตร์ของไทย", "ประวัติศาสตร์ชาติไทย", "สังคมและวัฒนธรรมไทย", "ศาสนาและความเชื่อในสังคมไทย", "ศิลปกรรมและภูมิปัญญาไทย",
        "ภาษาและวรรณกรรมไทย", "เศรษฐกิจและสังคมไทย", "การเมืองการปกครองของไทย", "กฎหมายไทยในชีวิตประจำวัน", "การศึกษาและพัฒนาทรัพยากรมนุษย์",
        "สาธารณสุขและคุณภาพชีวิต", "วิทยาศาสตร์และเทคโนโลยีไทย", "นโยบายสาธารณะของไทย", "บทบาทไทยในประชาคมโลก", "สรุปภาพรวมไทยศึกษา"
    ],
    prog: [ // 96414 โปรแกรม
        "หลักการแก้ปัญหาและ Algorithm", "ตัวแปร ชนิดข้อมูล และนิพจน์", "โครงสร้างควบคุมแบบเลือกทำ (If-Else)", "โครงสร้างควบคุมแบบทำซ้ำ (Loop)", "อาร์เรย์ (Array) 1 มิติ และ 2 มิติ",
        "ฟังก์ชันและการส่งผ่านค่า", "การจัดการสตริง (String)", "พอยน์เตอร์ (Pointer)", "โครงสร้างข้อมูลเบื้องต้น (Struct)", "การจัดการไฟล์ (File I/O)",
        "แนวคิดการเขียนโปรแกรมเชิงวัตถุ", "คลาส (Class) และ ออบเจกต์", "การสืบทอดคุณสมบัติ (Inheritance)", "ความหลากหลายทางรูปแบบ (Polymorphism)", "สรุปประเด็นการเขียนโปรแกรม"
    ],
    math: [ // 96102 คณิตศาสตร์
        "เซตและตรรกศาสตร์", "ความสัมพันธ์และฟังก์ชัน", "ระบบจำนวนจริง", "เมทริกซ์และดีเทอร์มิแนนต์", "เรขาคณิตวิเคราะห์และภาคตัดกรวย",
        "ลิมิตและความต่อเนื่องของฟังก์ชัน", "อนุพันธ์ของฟังก์ชัน", "การประยุกต์ของอนุพันธ์", "ปริพันธ์ (Integration)", "การประยุกต์ของปริพันธ์",
        "ความน่าจะเป็นเบื้องต้น", "การแจกแจงความน่าจะเป็น", "สถิติพรรณนา", "การประมาณค่าและทดสอบสมมติฐาน", "การวิเคราะห์การถดถอยและสหสัมพันธ์"
    ]
};

// ฐานข้อมูลรายวิชาสำหรับแสดงใน Modal และลิงก์ YouTube ที่เกี่ยวข้อง (อัปเดตลิงก์ใหม่แล้ว)
const subjectData = {
    'net': { id: '96304', name: 'การสื่อสารข้อมูลและเครือข่าย', yt: 'https://www.youtube.com/embed/GALB_LWiZoU' },
    'sys': { id: '96407', name: 'การพัฒนาระบบสารสนเทศ', yt: 'https://www.youtube.com/embed/ROS6TI4wicA' },
    'sec': { id: '99402', name: 'การจัดการความปลอดภัยฯ', yt: 'https://www.youtube.com/embed/swnsPecNgAA' },
    'thai': { id: '10151', name: 'ไทยศึกษา', yt: 'https://www.youtube.com/embed/HBvQItA1lLQ' },
    'prog': { id: '96414', name: 'การโปรแกรมคอมพิวเตอร์', yt: 'https://www.youtube.com/embed/ZBaGrJMIXvo' },
    'math': { id: '96102', name: 'คณิตศาสตร์และสถิติฯ', yt: 'https://www.youtube.com/embed/BNVfyOlzoI4' }
};

function triggerFadeAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        el.classList.remove('fade-in');
        void el.offsetWidth; // Trigger reflow
        el.classList.add('fade-in');
    });
}

function updateCardContent(weekNum) {
    let monT, monS, tueT, tueS, wedT, wedS, thuT, thuS, friT, friS, satM, satC;

    if (weekNum <= 15) {
        // สัปดาห์ที่ 1 - 15 (เรียนเนื้อหาหน่วยละ 1 สัปดาห์)
        const u = weekNum - 1; // Array เริ่มที่ index 0
        const unitTag = `(หน่วยที่ ${weekNum})`;

        monT = `${courseUnits.net[u]} ${unitTag}`;
        monS = `ทบทวนศัพท์ และสรุปประเด็น: ${courseUnits.net[u]}`;

        tueT = `${courseUnits.sys[u]} ${unitTag}`;
        tueS = `เล่าสรุป: ${courseUnits.sys[u]} จากหน้างานจริง`;

        wedT = `${courseUnits.sec[u]} ${unitTag}`;
        wedS = `วิเคราะห์เคส: ${courseUnits.sec[u]}`;

        thuT = `${courseUnits.thai[u]} ${unitTag}`;
        thuS = `ฟังสรุปเพลินๆ: ${courseUnits.thai[u]}`;

        friT = `${courseUnits.prog[u]} ${unitTag}`;
        friS = `สรุป Logic เขียนโค้ด: ${courseUnits.prog[u]}`;

        satM = `ลุยโจทย์คำนวณ: ${courseUnits.math[u]} ${unitTag}`;
        satC = `ฝึกเขียนโค้ดและ Flowchart: ${courseUnits.prog[u]}`;
    } else {
        // สัปดาห์ที่ 16 - 20 (ช่วงทบทวนและ Mock Exam)
        let reviewText = "";
        let satMathReview = "";

        if (weekNum === 16) {
            reviewText = "ทบทวนเนื้อหาหน่วยที่ 1-5 และเจาะจุดอ่อน";
            satMathReview = "ทำแบบฝึกหัดทบทวนคณิตศาสตร์ หน่วยที่ 1-5";
        } else if (weekNum === 17) {
            reviewText = "ทบทวนเนื้อหาหน่วยที่ 6-10 และทำ Short Note";
            satMathReview = "ทำแบบฝึกหัดทบทวนคณิตศาสตร์ หน่วยที่ 6-10";
        } else if (weekNum === 18) {
            reviewText = "ทบทวนเนื้อหาหน่วยที่ 11-15 และทำแบบทดสอบท้ายบท";
            satMathReview = "ทำแบบฝึกหัดทบทวนคณิตศาสตร์ หน่วยที่ 11-15";
        } else if (weekNum === 19) {
            reviewText = "จำลองทำข้อสอบเสมือนจริง (Mock Exam) ชุดที่ 1";
            satMathReview = "จำลองสอบจับเวลา คณิตศาสตร์และสถิติฯ";
        } else if (weekNum === 20) {
            reviewText = "โค้งสุดท้าย! สรุปเก็งข้อสอบและทริคการจำก่อนลงสนาม";
            satMathReview = "เก็งข้อสอบคำนวณที่ออกบ่อยๆ ก่อนสอบจริง";
        }

        monT = reviewText; monS = "รีวิวข้อสอบเก่าและจุดที่มักพลาด";
        tueT = reviewText; tueS = "รีวิวข้อสอบเก่าและจุดที่มักพลาด";
        wedT = reviewText; wedS = "รีวิวข้อสอบเก่าและจุดที่มักพลาด";
        thuT = reviewText; thuS = "รีวิวข้อสอบเก่าและจุดที่มักพลาด";
        friT = reviewText; friS = "ฝึกเขียนโค้ดแก้โจทย์ข้อสอบเก่า";
        satM = satMathReview;
        satC = "ตะลุยเขียนโค้ดข้อสอบเก่า (Mock Exam)";
    }

    // แสดงผลบนหน้าจอ
    document.getElementById('mon-theory').textContent = monT;
    document.getElementById('mon-summary').textContent = monS;
    document.getElementById('tue-theory').textContent = tueT;
    document.getElementById('tue-summary').textContent = tueS;
    document.getElementById('wed-theory').textContent = wedT;
    document.getElementById('wed-summary').textContent = wedS;
    document.getElementById('thu-theory').textContent = thuT;
    document.getElementById('thu-summary').textContent = thuS;
    document.getElementById('fri-theory').textContent = friT;
    document.getElementById('fri-summary').textContent = friS;
    document.getElementById('sat-math').textContent = satM;
    document.getElementById('sat-code').textContent = satC;

    triggerFadeAnimation();
}

// ฟังก์ชันเปิด Modal
function openModal(subjectKey) {
    const weekNum = parseInt(document.getElementById('weekSelector').value);
    const subj = subjectData[subjectKey];

    // เซ็ต Title
    document.getElementById('modalTitle').innerHTML = `<i class="ph ph-book-open"></i> ${subj.id}: ${subj.name}`;

    // เซ็ต หัวข้อย่อย
    let topicName = "";
    let topicDetail = "";

    if (weekNum <= 15) {
        topicName = `หน่วยที่ ${weekNum}: ${courseUnits[subjectKey][weekNum-1]}`;
        topicDetail = `เป้าหมายสัปดาห์นี้คือการทำความเข้าใจคอนเซปต์หลักของ "${courseUnits[subjectKey][weekNum-1]}" ควบคู่กับการทำแบบประเมินตนเองของ มสธ. ครับ`;
    } else {
        topicName = "ช่วงทบทวนและทำข้อสอบเก่า (Mock Exam)";
        topicDetail = "สัปดาห์นี้เน้นการฝึกทำข้อสอบเก่า จับเวลาจริง และทบทวนจุดที่ยังไม่แม่นยำเพื่อเตรียมพร้อมลงสนามสอบครับ";
    }

    document.getElementById('modalTopic').textContent = topicName;
    document.getElementById('modalDetail').textContent = topicDetail;

    // เซ็ต Video (ใช้ setTimeout ช่วยให้ iframe โหลดเนียนขึ้น)
    document.getElementById('modalVideo').src = subj.yt;

    // แสดง Modal ด้วย Animation
    const modal = document.getElementById('subjectModal');
    const modalContent = document.getElementById('modalContent');

    modal.classList.remove('hidden');
    // Force reflow
    void modal.offsetWidth;

    modal.classList.remove('opacity-0');
    modalContent.classList.remove('scale-95');
}

// ฟังก์ชันปิด Modal
function closeModal() {
    const modal = document.getElementById('subjectModal');
    const modalContent = document.getElementById('modalContent');

    modal.classList.add('opacity-0');
    modalContent.classList.add('scale-95');

    // รอ Animation จบแล้วค่อยซ่อน และหยุดวิดีโอ
    setTimeout(() => {
        modal.classList.add('hidden');
        document.getElementById('modalVideo').src = ""; // Stop video playback
    }, 300);
}

document.addEventListener('DOMContentLoaded', () => {
    const weekSelector = document.getElementById('weekSelector');
    const startDateDisplay = document.getElementById('startDateDisplay');

    const baseDate = new Date(2026, 3, 6); // 6 เม.ย. 2026
    const thaiMonths = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

    // สร้าง Dropdown สัปดาห์ที่ 1 - 20
    for (let i = 1; i <= 20; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = `สัปดาห์ที่ ${i}`;
        weekSelector.appendChild(option);
    }

    // โหลดข้อมูลสัปดาห์แรกทันที
    updateCardContent(1);

    // อีเวนต์เมื่อเปลี่ยนสัปดาห์
    weekSelector.addEventListener('change', (e) => {
        const weekNum = parseInt(e.target.value);
        const daysToAdd = (weekNum - 1) * 7;

        const newDate = new Date(baseDate);
        newDate.setDate(baseDate.getDate() + daysToAdd);

        const day = newDate.getDate();
        const month = thaiMonths[newDate.getMonth()];
        const year = newDate.getFullYear() + 543;

        startDateDisplay.textContent = `จันทร์ ${day} ${month} ${year}`;

        updateCardContent(weekNum);
    });

    // ปิด Modal เมื่อคลิกพื้นที่ว่างด้านนอก
    document.getElementById('subjectModal').addEventListener('click', function(e) {
        if(e.target === this) {
            closeModal();
        }
    });
});
