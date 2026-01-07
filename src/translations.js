export const translations = {
    en: {
        // Nav
        nav_home: "Home",
        nav_drivers: "Drivers",
        nav_workflow: "Workflow",
        nav_comparison: "Formal vs Sim",
        nav_solutions: "Solutions",
        nav_contact: "Contact",

        // Hero
        eyebrow: "Siemens EDA Solutions",
        hero_title: "FORMAL-BASED<br>FPGA DESIGN &<br>VERIFICATION",
        hero_subtitle: "Exhaustive mathematical proof for Safety-Critical & Mission-Critical Designs.",
        cta_explore: "Explore Solutions",
        cta_why: "Why Formal?",

        // Drivers
        drivers_title: "What's Driving This?",
        drivers_desc: "The demand for perfection in modern electronics.",
        card_safety_title: "Safety & Mission Critical",
        card_safety_desc: "Mandatory for standards like DO-254 (Airborne), ISO 26262 (Automotive), and IEC 62566 (Nuclear).",
        card_schedule_title: "Tight Schedules",
        card_schedule_desc: "Productive verification needed early. Minimize debugging time and detect bugs ASAP.",
        card_apps_title: "Automated Apps",
        card_apps_desc: "Use formal power without needing a PhD. 'Push-button' formal apps for specific tasks.",

        // Workflow
        workflow_title: "The Formal-Aware Workflow",
        workflow_desc: "Where to apply the right tool at the right time.",
        stage_rtl: "RTL Coding",
        stage_rtl_desc: "Catch syntax & style errors as you type.",
        stage_cdc: "CDC Analysis",
        stage_cdc_desc: "Solve clock domain crossings before sim.",
        stage_block: "Block Verify",
        stage_block_desc: "Push-button bug hunting (Deadlock, FSM).",
        stage_impl: "Implementation",
        stage_impl_desc: "Verify Synthesis & P&R didn't break logic.",

        // Comparison
        comp_title: "Simulation vs. Formal",
        comp_desc: "Completing the verification puzzle.",

        col_static_title: "Static Analysis",
        col_static_li1: "Finds issues that <em>might</em> exist",
        col_static_li2: "No testbench needed",
        col_static_li3: "Broad, Fast, Complete",
        col_static_li4: "Linting, CDC Structure",

        col_formal_title: "Formal Verification",
        col_formal_li1: "Proves issues <em>do</em> or <em>do not</em> exist",
        col_formal_li2: "No testbench needed",
        col_formal_li3: "Exhaustive Mathematical Proof",
        col_formal_li4: "Property Checking, Equivalence",

        col_sim_title: "Simulation",
        col_sim_li1: "Finds issues that <em>might</em> exist",
        col_sim_li2: "<strong>Requires</strong> Testbench",
        col_sim_li3: "Stimulus-driven (Linear)",
        col_sim_li4: "Functional Modeling",

        // Solutions
        sol_title: "Automated Formal Solutions",
        sol_desc: "Targeting expensive, painful problems automatically.",

        sol_lint_desc: "Syntactic, Structural, Semantic, and Stylistic checks. Identify holes in the code before simulation begins. Ensures RTL is re-usable and industry-compliant.",
        sol_inspect_desc: "\"Push-button Formal\". Automatically finds deadlocks, livelocks, FSM unreachable states, potential overflows, and bus contention without user assertions.",
        sol_cdc_desc: "Comprehensive Clock-Domain Crossing verification. Identifies synchronization errors, protocol violations, and reconvergence issues that simulation misses.",
        sol_eq_desc: "Absolute assurance from RTL to Netlist. Verifies that synthesis and Place-and-Route (P&R) optimizations (pipelining, retiming, duplication) preserved logic functionality.",

        // Footer/Contact
        contact_title: "Get in Touch",
        footer_text: "&copy; 2025 EDMFG. Based on Formal-Based Applications for FPGA Design & Verification."
    },
    kr: {
        // Nav
        nav_home: "홈",
        nav_drivers: "추진 요인",
        nav_workflow: "워크플로우",
        nav_comparison: "포멀 vs 시뮬레이션",
        nav_solutions: "솔루션",
        nav_contact: "문의",

        // Hero
        eyebrow: "Siemens EDA 솔루션",
        hero_title: "포멀 기반<br>FPGA 설계 및<br>검증",
        hero_subtitle: "안전 필수 및 임무 필수(Mission-Critical) 설계를 위한 완벽한 수학적 검증.",
        cta_explore: "솔루션 보기",
        cta_why: "왜 포멀인가?",

        // Drivers
        drivers_title: "왜 필요한가?",
        drivers_desc: "현대 전자 공학이 요구하는 완벽함에 대한 수요.",
        card_safety_title: "안전 및 임무 필수",
        card_safety_desc: "DO-254(항공), ISO 26262(자동차), IEC 62566(원자력) 같은 표준 준수 필수.",
        card_schedule_title: "빠듯한 일정",
        card_schedule_desc: "초기 단계에서의 생산적인 검증 필요. 디버깅 시간을 최소화하고 버그를 즉시 발견.",
        card_apps_title: "자동화된 앱",
        card_apps_desc: "박사 학위 없이도 포멀 기술 사용 가능. 특정 작업을 위한 '버튼식' 포멀 앱.",

        // Workflow
        workflow_title: "포멀 인식 워크플로우",
        workflow_desc: "적재적소에 올바른 도구를 적용하는 방법.",
        stage_rtl: "RTL 코딩",
        stage_rtl_desc: "타이핑과 동시에 문법 및 스타일 오류 감지.",
        stage_cdc: "CDC 분석",
        stage_cdc_desc: "시뮬레이션 전에 클럭 도메인 교차 문제 해결.",
        stage_block: "블록 검증",
        stage_block_desc: "버튼식 버그 사냥 (데드락, FSM).",
        stage_impl: "구현/합성",
        stage_impl_desc: "합성 및 P&R 과정에서 로직이 깨지지 않았는지 검증.",

        // Comparison
        comp_title: "시뮬레이션 vs 포멀",
        comp_desc: "검증 퍼즐의 완성.",

        col_static_title: "정적 분석 (Static)",
        col_static_li1: "문제가 <em>존재할 수 있음</em>을 발견",
        col_static_li2: "테스트벤치 불필요",
        col_static_li3: "광범위하고 빠르며 완전함",
        col_static_li4: "린팅, CDC 구조",

        col_formal_title: "포멀 검증 (Formal)",
        col_formal_li1: "문제가 <em>있다/없다</em>를 증명",
        col_formal_li2: "테스트벤치 불필요",
        col_formal_li3: "완벽한 수학적 증명",
        col_formal_li4: "프로퍼티 체크, 등가성 검증",

        col_sim_title: "시뮬레이션 (Simulation)",
        col_sim_li1: "문제가 <em>존재할 수 있음</em>을 발견",
        col_sim_li2: "테스트벤치 <strong>필수</strong>",
        col_sim_li3: "자극 기반 (선형적)",
        col_sim_li4: "기능적 모델링",

        // Solutions
        sol_title: "자동화된 포멀 솔루션",
        sol_desc: "비싸고 고통스러운 문제들을 자동으로 해결합니다.",

        sol_lint_desc: "문법적, 구조적, 의미론적, 스타일적 검사. 시뮬레이션 시작 전에 코드의 구멍을 식별합니다. RTL의 재사용성과 산업 표준 준수를 보장합니다.",
        sol_inspect_desc: "\"버튼식 포멀\". 사용자 어설션 없이도 데드락, 라이브락, FSM 도달 불가능 상태, 잠재적 오버플로우, 버스 경합을 자동으로 찾습니다.",
        sol_cdc_desc: "포괄적인 클럭 도메인 교차(CDC) 검증. 시뮬레이션이 놓치는 동기화 오류, 프로토콜 위반, 재수렴(Reconvergence) 문제를 식별합니다.",
        sol_eq_desc: "RTL에서 넷리스트까지 절대적인 보증. 합성 및 P&R 최적화(파이프라이닝, 리타이밍, 복제)가 논리 기능을 보존했는지 검증합니다.",

        // Footer/Contact
        contact_title: "문의하기",
        footer_text: "&copy; 2025 EDMFG. FPGA 설계 및 검증을 위한 포멀 기반 애플리케이션."
    }
};
