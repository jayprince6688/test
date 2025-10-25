/**
 * SOULTEST - SCL-90心理健康测试应用
 * 基于SCL-90量表的心理健康测试Web应用
 * 所有测试数据仅存储在本地，不会上传至服务器
 */

// ======== 应用数据 ========
const AppData = {
    // 测试题目数据（标准SCL-90量表90题）
    questions: [
        "头痛",
        "神经过敏，心中不踏实",
        "头脑中有不必要的想法或字句盘旋",
        "头昏或晕倒",
        "对异性的兴趣减退",
        "对旁人责备求全",
        "感到别人能控制您的思想",
        "责怪别人制造麻烦",
        "忘记性大",
        "担心自己的衣饰整齐及仪态的端正",
        "容易烦恼和激动",
        "胸痛",
        "害怕空旷的场所或街道",
        "感到自己的精力下降，活动减慢",
        "想结束自己的生命",
        "听到旁人听不到的声音",
        "发抖",
        "感到大多数人都不可信任",
        "胃口不好",
        "容易哭泣",
        "同异性相处时感到害羞不自在",
        "感到受骗，中了圈套或有人想抓住您",
        "无缘无故地突然感到害怕",
        "自己不能控制地大发脾气",
        "怕单独出门",
        "经常责怪自己",
        "腰痛",
        "感到难以完成任务",
        "感到孤独",
        "感到苦闷",
        "过分担忧",
        "对事物不感兴趣",
        "感到害怕",
        "您的感情容易受到伤害",
        "旁人能知道您的私下想法",
        "感到别人不理解您、不同情您",
        "感到人们对您不友好，不喜欢您",
        "做事必须做得很慢以保证做得正确",
        "心跳得很厉害",
        "恶心或胃部不舒服",
        "感到比不上他人",
        "肌肉酸痛",
        "感到有人在监视您、谈论您",
        "难以入睡",
        "做事必须反复检查",
        "难以作出决定",
        "怕乘电车、公共汽车、地铁或火车",
        "呼吸有困难",
        "一阵阵发冷或发热",
        "因为感到害怕而避开某些东西、场合或活动",
        "脑子变空了",
        "身体发麻或刺痛",
        "喉咙有梗塞感",
        "感到前途没有希望",
        "不能集中注意",
        "感到身体的某一部分软弱无力",
        "感到紧张或容易紧张",
        "感到手或脚发重",
        "想到死亡的事",
        "吃得太多",
        "当别人看着您或谈论您时感到不自在",
        "有一些不属于您自己的想法",
        "有想打人或伤害他人的冲动",
        "醒得太早",
        "必须反复洗手、点数目或触摸某些东西",
        "睡得不稳不深",
        "有想摔坏或破坏东西的冲动",
        "有一些别人没有的想法或念头",
        "感到对别人神经过敏",
        "在商店或电影院等人多的地方感到不自在",
        "感到任何事情都很困难",
        "一阵阵恐惧或惊恐",
        "感到在公共场合吃东西很不舒服",
        "经常与人争论",
        "单独一个人时神经很紧张",
        "别人对您的成绩没有作出恰当的评价",
        "即使和别人在一起也感到孤单",
        "感到坐立不安心神不定",
        "感到自己没有什么价值",
        "感到熟悉的东西变成陌生或不像是真的",
        "大叫或摔东西",
        "害怕会在公共场合昏倒",
        "感到别人想占您的便宜",
        "为一些有关性的想法而很苦恼",
        "您认为应该因为自己的过错而受到惩罚",
        "感到要很快把事情做完",
        "感到自己的身体有严重问题",
        "从未感到和其他人很亲近",
        "感到自己有罪",
        "感到自己的脑子有毛病"
    ],
    
    // 因子分计算的题目索引（从0开始，基于标准SCL-90量表）
    factorIndices: {
        // 躯体化：1, 4, 12, 27, 40, 42, 48, 49, 52, 53, 56, 58 (标准题号，对应索引减1)
        somatization: [0, 3, 11, 26, 39, 41, 47, 48, 51, 52, 55, 57],
        // 强迫症状：3, 9, 10, 28, 38, 45, 46, 51, 55, 65 (标准题号，对应索引减1)
        强迫症状: [2, 8, 9, 27, 37, 44, 45, 50, 54, 64],
        // 人际关系敏感：6, 21, 34, 36, 37, 41, 61, 69, 73 (标准题号，对应索引减1)
        interpersonal: [5, 20, 33, 35, 36, 40, 60, 68, 72],
        // 抑郁：5, 14, 15, 20, 22, 26, 29, 30, 31, 32, 54, 71, 79 (标准题号，对应索引减1)
        depression: [4, 13, 14, 19, 21, 25, 28, 29, 30, 31, 53, 70, 78],
        // 焦虑：2, 17, 23, 33, 39, 57, 72, 78, 80, 86 (标准题号，对应索引减1)
        anxiety: [1, 16, 22, 32, 38, 56, 71, 77, 79, 85],
        // 敌对：11, 24, 63, 67, 74, 81 (标准题号，对应索引减1)
        hostility: [10, 23, 62, 66, 73, 80],
        // 恐怖：13, 25, 47, 50, 70, 75, 82 (标准题号，对应索引减1)
        phobicAnxiety: [12, 24, 46, 49, 69, 74, 81],
        // 偏执：8, 18, 43, 68, 76, 83 (标准题号，对应索引减1)
        paranoidIdeation: [7, 17, 42, 67, 75, 82],
        // 精神病性：7, 16, 35, 62, 77, 84, 85, 87, 88, 90 (标准题号，对应索引减1)
        psychoticism: [6, 15, 34, 61, 76, 83, 84, 86, 87, 89],
        // 其他：19, 44, 59, 60, 64, 66, 89 (标准题号，对应索引减1)
        other: [18, 43, 58, 59, 63, 65, 88]
    },
    
    // 应用状态
    state: {
        currentQuestionIndex: 0,
        answers: [],
        results: null
    },
    
    // 保存状态到本地存储
    saveState() {
        localStorage.setItem('soulTestState', JSON.stringify(this.state));
    },
    
    // 从本地存储加载状态
    loadState() {
        const savedState = localStorage.getItem('soulTestState');
        if (savedState) {
            this.state = JSON.parse(savedState);
        }
    },
    
    // 重置测试状态
    resetTest() {
        this.state.currentQuestionIndex = 0;
        this.state.answers = [];
        this.state.results = null;
        this.saveState();
    }
};

// ======== 页面控制 ========
const PageController = {
    // DOM 元素缓存
    elements: {},
    
    // 底部导航栏元素
    bottomNavItems: [],
    
    // 初始化页面
    init() {
        this.cacheElements();
        this.bindEvents();
        AppData.loadState();
        
        // 检查是否有保存的测试结果
        if (AppData.state.results) {
            this.updateMyPage();
        }
        
        // 默认显示首页
        App.navigateTo('home');
    },
    
    // 缓存DOM元素
    cacheElements() {
        this.elements = {
            // 页面容器
            homePage: document.getElementById('home-page'),
            aboutPage: document.getElementById('about-page'),
            testPage: document.getElementById('test-page'),
            resultPage: document.getElementById('result-page'),
            myPage: document.getElementById('my-page'),
            
            // 导航元素
            mobileMenu: document.getElementById('mobile-menu'),
            mobileMenuButton: document.getElementById('mobile-menu-button'),
            navHome: document.getElementById('nav-home'),
            navAbout: document.getElementById('nav-about'),
            navTest: document.getElementById('nav-test'),
            mobileNavHome: document.getElementById('mobile-nav-home'),
            mobileNavAbout: document.getElementById('mobile-nav-about'),
            mobileNavTest: document.getElementById('mobile-nav-test'),
            bottomNavHome: document.getElementById('bottom-nav-home'),
            bottomNavAbout: document.getElementById('bottom-nav-about'),
            bottomNavMy: document.getElementById('bottom-nav-my'),
            
            // 首页元素
            startTestBtn: document.getElementById('start-test-btn'),
            
            // 测试页元素
            questionText: document.getElementById('question-text'),
            currentQuestion: document.getElementById('current-question'),
            progressBar: document.getElementById('progress-bar'),
            optionItems: document.querySelectorAll('.option-item'),
            prevBtn: document.getElementById('prev-btn'),
            nextBtn: document.getElementById('next-btn'),
            
            // 结果页元素
            backToHomeBtn: document.getElementById('back-to-home'),
            restartTestBtn: document.getElementById('restart-test-btn'),
            resultContent: document.getElementById('result-content'),
            totalScore: document.getElementById('total-score'),
            positiveItems: document.getElementById('positive-items'),
            symptomIndex: document.getElementById('symptom-index'),
            resultChart: document.getElementById('result-chart'),
            resultAdvice: document.getElementById('result-advice'),
            
            // 我的页面元素
            myResultsList: document.getElementById('my-results-list'),
            clearResultsBtn: document.getElementById('clear-results-btn')
        };
        
        // 底部导航导航栏项目
        this.bottomNavItems = [
            this.elements.bottomNavHome,
            this.elements.bottomNavAbout,
            this.elements.bottomNavMy
        ];
    },
    
    // 绑定事件
    bindEvents() {
        // 桌面导航
        this.elements.navHome.addEventListener('click', (e) => {
            e.preventDefault();
            App.navigateTo('home');
        });
        
        this.elements.navAbout.addEventListener('click', (e) => {
            e.preventDefault();
            App.navigateTo('about');
        });
        
        this.elements.navTest.addEventListener('click', (e) => {
            e.preventDefault();
            App.navigateTo('test');
        });
        
        // 移动端导航
        this.elements.mobileMenuButton.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        
        this.elements.mobileNavHome.addEventListener('click', (e) => {
            e.preventDefault();
            this.elements.mobileMenu.classList.add('hidden');
            App.navigateTo('home');
        });
        
        this.elements.mobileNavAbout.addEventListener('click', (e) => {
            e.preventDefault();
            this.elements.mobileMenu.classList.add('hidden');
            App.navigateTo('about');
        });
        
        this.elements.mobileNavTest.addEventListener('click', (e) => {
            e.preventDefault();
            this.elements.mobileMenu.classList.add('hidden');
            App.navigateTo('test');
        });
        
        // 开始测试按钮
        this.elements.startTestBtn.addEventListener('click', () => {
            AppData.resetTest();
            App.navigateTo('test');
        });
        
        // 测试题选项事件
        this.elements.optionItems.forEach(option => {
            option.addEventListener('click', () => {
                this.selectOption(option);
            });
        });
        
        // 测试页导航按钮
        this.elements.prevBtn.addEventListener('click', () => this.goToPrevQuestion());
        this.elements.nextBtn.addEventListener('click', () => this.goToNextQuestion());
        
        // 结果页按钮
        this.elements.backToHomeBtn.addEventListener('click', () => {
            App.navigateTo('home');
        });
        
        // 再测一次按钮
        if (this.elements.restartTestBtn) {
            this.elements.restartTestBtn.addEventListener('click', () => {
                AppData.resetTest();
                App.navigateTo('test');
            });
        }
        
        // 底部导航栏事件
        if (this.elements.bottomNavHome) {
            this.elements.bottomNavHome.addEventListener('click', (e) => {
                e.preventDefault();
                App.navigateTo('home');
            });
        }
        
        if (this.elements.bottomNavAbout) {
            this.elements.bottomNavAbout.addEventListener('click', (e) => {
                e.preventDefault();
                App.navigateTo('about');
            });
        }
        
        if (this.elements.bottomNavMy) {
            this.elements.bottomNavMy.addEventListener('click', (e) => {
                e.preventDefault();
                App.navigateTo('my');
            });
        }
        
        // 我的页面按钮
        if (this.elements.clearResultsBtn) {
            this.elements.clearResultsBtn.addEventListener('click', () => {
                this.clearResults();
            });
        }
    },
    
    // 切换移动端菜单
    toggleMobileMenu() {
        const menu = this.elements.mobileMenu;
        menu.classList.toggle('hidden');
        
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('mobile-menu-enter');
            setTimeout(() => {
                menu.classList.add('mobile-menu-enter-active');
            }, 10);
        } else {
            menu.classList.remove('mobile-menu-enter-active');
        }
    },
    
    // 显示指定页面
    showPage(pageName) {
        // 隐藏所有页面
        this.elements.homePage.classList.add('hidden');
        this.elements.aboutPage.classList.add('hidden');
        this.elements.testPage.classList.add('hidden');
        this.elements.resultPage.classList.add('hidden');
        if (this.elements.myPage) {
            this.elements.myPage.classList.add('hidden');
        }
        
        // 显示目标页面
        const pageElement = this.elements[`${pageName}Page`];
        if (pageElement) {
            pageElement.classList.remove('hidden');
            
            // 添加页面进入动画
            pageElement.classList.add('page-enter');
            setTimeout(() => {
                pageElement.classList.add('page-enter-active');
            }, 10);
            
            // 页面特定初始化
            if (pageName === 'test') {
                this.updateTestPage();
            } else if (pageName === 'result') {
                this.updateResultPage();
            } else if (pageName === 'my') {
                this.updateMyPage();
            }
        }
        
        // 更新导航状态
        this.updateNavState(pageName);
    },
    
    // 更新导航状态
    updateNavState(pageName) {
        // 重置所有导航项
        [this.elements.navHome, this.elements.navAbout, this.elements.navTest].forEach(item => {
            if (item) {
                item.classList.remove('nav-item-active');
                item.classList.add('text-muted', 'hover:text-primary', 'border-transparent', 'hover:border-primary/30');
            }
        });
        
        // 重置移动端导航项
        [this.elements.mobileNavHome, this.elements.mobileNavAbout, this.elements.mobileNavTest].forEach(item => {
            if (item) {
                item.classList.remove('nav-item-active');
                item.classList.add('text-muted', 'hover:text-primary', 'hover:bg-light');
            }
        });
        
        // 重置底部导航项
        this.bottomNavItems.forEach(item => {
            if (item) {
                item.classList.remove('text-primary');
                item.classList.add('text-muted');
            }
        });
        
        // 设置当前页面导航项
        switch(pageName) {
            case 'home':
                this.elements.navHome.classList.add('nav-item-active');
                this.elements.navHome.classList.remove('text-muted', 'hover:text-primary', 'border-transparent', 'hover:border-primary/30');
                this.elements.mobileNavHome.classList.add('nav-item-active');
                this.elements.mobileNavHome.classList.remove('text-muted', 'hover:text-primary', 'hover:bg-light');
                if (this.elements.bottomNavHome) {
                    this.elements.bottomNavHome.classList.remove('text-muted');
                    this.elements.bottomNavHome.classList.add('text-primary');
                }
                break;
            case 'about':
                this.elements.navAbout.classList.add('nav-item-active');
                this.elements.navAbout.classList.remove('text-muted', 'hover:text-primary', 'border-transparent', 'hover:border-primary/30');
                this.elements.mobileNavAbout.classList.add('nav-item-active');
                this.elements.mobileNavAbout.classList.remove('text-muted', 'hover:text-primary', 'hover:bg-light');
                if (this.elements.bottomNavAbout) {
                    this.elements.bottomNavAbout.classList.remove('text-muted');
                    this.elements.bottomNavAbout.classList.add('text-primary');
                }
                break;
            case 'test':
            case 'result':
                this.elements.navTest.classList.add('nav-item-active');
                this.elements.navTest.classList.remove('text-muted', 'hover:text-primary', 'border-transparent', 'hover:border-primary/30');
                this.elements.mobileNavTest.classList.add('nav-item-active');
                this.elements.mobileNavTest.classList.remove('text-muted', 'hover:text-primary', 'hover:bg-light');
                break;
            case 'my':
                if (this.elements.bottomNavMy) {
                    this.elements.bottomNavMy.classList.remove('text-muted');
                    this.elements.bottomNavMy.classList.add('text-primary');
                }
                break;
        }
    },
    
    // 更新测试页面
    updateTestPage() {
        // 更新题目显示
        const currentIndex = AppData.state.currentQuestionIndex;
        this.elements.currentQuestion.textContent = currentIndex + 1;
        this.elements.questionText.textContent = AppData.questions[currentIndex] || "加载题目中...";
        
        // 更新进度条
        const progress = ((currentIndex + 1) / AppData.questions.length) * 100;
        this.elements.progressBar.style.width = `${progress}%`;
        
        // 更新按钮状态
        this.elements.prevBtn.disabled = currentIndex === 0;
        this.elements.nextBtn.disabled = !AppData.state.answers[currentIndex];
        
        // 更新下一题按钮样式和文本
        if (currentIndex === AppData.questions.length - 1) {
            // 最后一题显示"提交"按钮
            this.elements.nextBtn.textContent = '提交';
            this.elements.nextBtn.innerHTML = '提交 <i class="fa fa-check ml-1"></i>';
        } else {
            // 其他题目显示"下一题"按钮
            this.elements.nextBtn.textContent = '下一题';
            this.elements.nextBtn.innerHTML = '下一题 <i class="fa fa-arrow-right ml-1"></i>';
        }
        
        if (this.elements.nextBtn.disabled) {
            this.elements.nextBtn.classList.add('bg-primary/20');
            this.elements.nextBtn.classList.remove('bg-primary', 'hover:bg-primary/90');
        } else {
            this.elements.nextBtn.classList.remove('bg-primary/20');
            this.elements.nextBtn.classList.add('bg-primary', 'hover:bg-primary/90');
        }
        
        // 显示已选答案
        this.resetOptions();
        if (AppData.state.answers[currentIndex]) {
            const selectedOption = Array.from(this.elements.optionItems).find(
                item => parseInt(item.dataset.score) === AppData.state.answers[currentIndex]
            );
            if (selectedOption) {
                this.highlightOption(selectedOption);
            }
        }
    },
    
    // 重置选项状态
    resetOptions() {
        this.elements.optionItems.forEach(item => {
            item.classList.remove('option-selected');
            const checkElement = item.querySelector('.option-check');
            if (checkElement) {
                checkElement.classList.add('hidden');
            }
        });
    },
    
    // 高亮选中的选项
    highlightOption(option) {
        option.classList.add('option-selected');
        const checkElement = option.querySelector('.option-check');
        if (checkElement) {
            checkElement.classList.remove('hidden');
        }
    },
    
    // 选择选项
    selectOption(option) {
        this.resetOptions();
        this.highlightOption(option);
        
        // 保存答案
        const score = parseInt(option.dataset.score);
        AppData.state.answers[AppData.state.currentQuestionIndex] = score;
        
        // 启用下一题/提交按钮
        this.elements.nextBtn.disabled = false;
        this.elements.nextBtn.classList.remove('bg-primary/20');
        this.elements.nextBtn.classList.add('bg-primary', 'hover:bg-primary/90');
        
        // 只在非最后一题时自动跳转到下一题
        const currentIndex = AppData.state.currentQuestionIndex;
        if (currentIndex < AppData.questions.length - 1) {
            setTimeout(() => this.goToNextQuestion(), 500);
        }
        // 如果是最后一题，更新按钮文本
        else {
            this.elements.nextBtn.textContent = '提交';
            this.elements.nextBtn.innerHTML = '提交 <i class="fa fa-check ml-1"></i>';
        }
        
        AppData.saveState();
    },
    
    // 上一题
    goToPrevQuestion() {
        if (AppData.state.currentQuestionIndex > 0) {
            AppData.state.currentQuestionIndex--;
            AppData.saveState();
            this.updateTestPage();
        }
    },
    
    // 下一题
    goToNextQuestion() {
        const currentIndex = AppData.state.currentQuestionIndex;
        
        // 如果是最后一题，跳转到结果页
        if (currentIndex === AppData.questions.length - 1) {
            App.calculateResults();
            App.navigateTo('result');
        } 
        // 如果不是最后一题，跳转到下一题
        else if (currentIndex < AppData.questions.length - 1) {
            AppData.state.currentQuestionIndex++;
            AppData.saveState();
            this.updateTestPage();
        }
    },
    
    // 更新结果页面
    updateResultPage() {
        if (!AppData.state.results) {
            return;
        }
        
        // 显示基本结果
        if (this.elements.totalScore) {
            this.elements.totalScore.textContent = AppData.state.results.totalScore;
        }
        
        if (this.elements.positiveItems) {
            this.elements.positiveItems.textContent = AppData.state.results.positiveItems;
        }
        
        if (this.elements.symptomIndex) {
            this.elements.symptomIndex.textContent = AppData.state.results.symptomIndex.toFixed(2);
        }
        
        if (this.elements.positiveSymptomMean) {
            this.elements.positiveSymptomMean.textContent = AppData.state.results.positiveSymptomMean.toFixed(2);
        }
        
        // 创建雷达图
        this.createResultChart();
        
        // 显示结果分析与建议
        this.displayResultAdvice();
        
        // 保存结果到历史记录
        this.saveResultToHistory();
    },
    
    // 创建结果雷达图
    createResultChart() {
        if (!this.elements.resultChart) return;
        
        // 销毁旧图表
        if (window.resultChartInstance) {
            window.resultChartInstance.destroy();
        }
        
        // 准备数据
        const results = AppData.state.results;
        const labels = ['躯体化', '强迫症状', '人际关系敏感', '抑郁', '焦虑', '敌对', '恐怖', '偏执', '精神病性', '其他'];
        const data = [
            results.somatizationScore,
            results.obsessiveCompulsiveScore,
            results.interpersonalScore,
            results.depressionScore,
            results.anxietyScore,
            results.hostilityScore,
            results.phobicAnxietyScore,
            results.paranoidIdeationScore,
            results.psychoticismScore,
            results.otherScore
        ];
        
        // 创建新图表
        const ctx = this.elements.resultChart.getContext('2d');
        window.resultChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: '得分',
                    data: data,
                    backgroundColor: 'rgba(79, 70, 229, 0.2)',
                    borderColor: 'rgba(79, 70, 229, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(79, 70, 229, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(79, 70, 229, 1)'
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                maintainAspectRatio: false
            }
        });
    },
    
    // 显示结果分析与建议
    displayResultAdvice() {
        if (!this.elements.resultAdvice) return;
        
        const results = AppData.state.results;
        let adviceHTML = '';
        
        // 总体评估
        adviceHTML += '<div class="mb-3">';
        adviceHTML += '<h4 class="font-semibold text-black text-sm mb-2">总体评估</h4>';
        
        // 总体评估
        let overallStatus = '';
        let overallColor = '';
        let overallAdvice = '';
        
        if (results.totalScore <= 160 && results.positiveItems <= 43 && results.symptomIndex <= 1.67) {
            overallStatus = '心理健康状况良好';
            overallColor = 'text-green-500';
            overallAdvice = '您的心理健康状况良好，各项指标均在正常范围内。这表明您当前的心理状态较为稳定，能够较好地应对日常生活中的压力和挑战。';
        } else if (results.totalScore <= 200 && results.positiveItems <= 60 && results.symptomIndex <= 2) {
            overallStatus = '心理健康状况基本良好';
            overallColor = 'text-blue-500';
            overallAdvice = '您的心理健康状况基本良好，但存在一些轻微的心理压力或情绪波动。这些可能与近期的生活事件、工作压力或环境变化有关。';
        } else if (results.totalScore <= 250 && results.positiveItems <= 70 && results.symptomIndex <= 2.5) {
            overallStatus = '心理健康状况一般，需关注';
            overallColor = 'text-yellow-500';
            overallAdvice = '您的心理健康状况一般，存在一定程度的心理困扰。建议关注自己的心理状态，适当调整生活方式，必要时寻求专业帮助。';
        } else {
            overallStatus = '心理健康状况较差，需重视';
            overallColor = 'text-red-500';
            overallAdvice = '您的心理健康状况可能存在较明显的问题，建议尽快寻求专业心理咨询或治疗。这些问题可能已经对您的日常生活、工作或人际关系产生了负面影响。';
        }
        
        adviceHTML += `<p class="font-medium ${overallColor} mb-1">${overallStatus}</p>`;
        adviceHTML += `<p class="text-muted">${overallAdvice}</p>`;
        
        // 测试指标解释
        adviceHTML += '<div class="mt-2">';
        adviceHTML += '<p class="text-xs text-muted"><span class="font-medium">总分</span>：' + results.totalScore + '分，反映整体心理健康状况。</p>';
        adviceHTML += '<p class="text-xs text-muted"><span class="font-medium">阳性项目数</span>：' + results.positiveItems + '项，反映存在症状的项目数量。</p>';
        adviceHTML += '<p class="text-xs text-muted"><span class="font-medium">总症状指数</span>：' + results.symptomIndex.toFixed(2) + '，反映症状的平均严重程度。</p>';
        adviceHTML += '<p class="text-xs text-muted"><span class="font-medium">阳性症状均分</span>：' + results.positiveSymptomMean.toFixed(2) + '，反映有症状项目的平均严重程度。</p>';
        adviceHTML += '</div>';
        
        adviceHTML += '</div>';
        
        // 各维度分析
        adviceHTML += '<div>';
        adviceHTML += '<h4 class="font-semibold text-black text-sm mb-2">各维度分析</h4>';
        adviceHTML += '<div class="space-y-2">';
        
        // 躯体化
        if (results.somatizationScore > 1.5) {
            let severity = '';
            let advice = '';
            
            if (results.somatizationScore <= 2) {
                severity = '轻度';
                advice = '您可能偶尔会感到身体不适，如头痛、疲劳等，但这些症状对您的日常生活影响较小。';
            } else if (results.somatizationScore <= 3) {
                severity = '中度';
                advice = '您可能经常感到身体不适，如头痛、背痛、睡眠障碍等。这些症状可能与心理压力有关，建议关注身体健康，适当运动，必要时就医检查。';
            } else {
                severity = '明显';
                advice = '您可能长期受到多种身体不适的困扰，如头痛、胸痛、消化系统问题等。这些症状可能与心理因素密切相关，建议寻求专业医生的帮助，进行全面的身体检查和心理评估。';
            }
            
            adviceHTML += `
                <div class="bg-blue-50 rounded-12 p-2 border border-blue-100">
                    <p class="font-medium text-black">躯体化 (${results.somatizationScore.toFixed(2)}) - ${severity}</p>
                    <p class="text-xs text-black">反映身体不适感。${advice}</p>
                </div>
            `;
        }
        
        // 强迫症状
        if (results.obsessiveCompulsiveScore > 1.6) {
            let severity = '';
            let advice = '';
            
            if (results.obsessiveCompulsiveScore <= 2) {
                severity = '轻度';
                advice = '您可能偶尔会有一些不必要的想法或重复行为，但这些不会对您的生活造成明显困扰。';
            } else if (results.obsessiveCompulsiveScore <= 3) {
                severity = '中度';
                advice = '您可能经常出现一些不必要的重复想法或行为，如反复检查、过度清洁等。这些症状已经对您的日常生活造成一定影响，建议尝试放松训练，减少不必要的担忧。';
            } else {
                severity = '明显';
                advice = '您可能受到严重的强迫症状困扰，如无法控制的重复想法、冲动或行为。这些症状已经严重影响您的生活质量，建议寻求专业心理咨询或治疗，如认知行为疗法。';
            }
            
            adviceHTML += `
                <div class="bg-purple-50 rounded-12 p-2 border border-purple-100">
                    <p class="font-medium text-black">强迫症状 (${results.obsessiveCompulsiveScore.toFixed(2)}) - ${severity}</p>
                    <p class="text-xs text-black">反映无法摆脱的无意义想法和行为。${advice}</p>
                </div>
            `;
        }
        
        // 人际关系敏感
        if (results.interpersonalScore > 1.7) {
            let severity = '';
            let advice = '';
            
            if (results.interpersonalScore <= 2) {
                severity = '轻度';
                advice = '您在某些社交场合可能会感到轻微不自在，但总体上能够维持良好的人际关系。';
            } else if (results.interpersonalScore <= 3) {
                severity = '中度';
                advice = '您在人际交往中可能经常感到不自在或敏感。建议增强自信，学习有效的沟通技巧，适当参加社交活动。';
            } else {
                severity = '明显';
                advice = '您可能在人际关系方面存在较大困难，感到自卑、孤独或不被理解。建议寻求专业心理咨询，学习改善人际关系的技巧。';
            }
            
            adviceHTML += `
                <div class="bg-green-50 rounded-12 p-2 border border-green-100">
                    <p class="font-medium text-black">人际关系敏感 (${results.interpersonalScore.toFixed(2)}) - ${severity}</p>
                    <p class="text-xs text-black">反映人际不自在与自卑感。${advice}</p>
                </div>
            `;
        }
        
        // 抑郁
        if (results.depressionScore > 1.6) {
            let severity = '';
            let advice = '';
            
            if (results.depressionScore <= 2) {
                severity = '轻度';
                advice = '您可能偶尔会感到情绪低落或兴趣减退，但影响较小。';
            } else if (results.depressionScore <= 3) {
                severity = '中度';
                advice = '您可能经常感到情绪低落、兴趣减退或精力不足。建议多与亲友交流，适当参加户外活动，必要时寻求专业帮助。';
            } else {
                severity = '明显';
                advice = '您可能正经历严重的抑郁症状，如持续的情绪低落、失去兴趣甚至有自杀念头。建议尽快寻求专业心理医生或精神科医师的帮助。';
            }
            
            adviceHTML += `
                <div class="bg-orange-50 rounded-12 p-2 border border-orange-100">
                    <p class="font-medium text-black">抑郁 (${results.depressionScore.toFixed(2)}) - ${severity}</p>
                    <p class="text-xs text-black">反映苦闷情感与心境。${advice}</p>
                </div>
            `;
        }
        
        // 焦虑
        if (results.anxietyScore > 1.5) {
            let severity = '';
            let advice = '';
            
            if (results.anxietyScore <= 2) {
                severity = '轻度';
                advice = '您可能在面临压力时会感到一些紧张或不安，但通常能够自我调节。';
            } else if (results.anxietyScore <= 3) {
                severity = '中度';
                advice = '您可能经常感到紧张、担忧或坐立不安。建议学习放松技巧，如深呼吸、冥想等。';
            } else {
                severity = '明显';
                advice = '您可能正经历严重的焦虑症状，如持续的紧张不安、心悸、惊恐发作等。建议寻求专业心理咨询或治疗，必要时考虑药物治疗。';
            }
            
            adviceHTML += `
                <div class="bg-red-50 rounded-12 p-2 border border-red-100">
                    <p class="font-medium text-black">焦虑 (${results.anxietyScore.toFixed(2)}) - ${severity}</p>
                    <p class="text-xs text-black">反映烦躁、紧张和神经过敏。${advice}</p>
                </div>
            `;
        }
        
        // 敌对
        if (results.hostilityScore > 1.5) {
            let severity = '';
            let advice = '';
            
            if (results.hostilityScore <= 2) {
                severity = '轻度';
                advice = '您可能偶尔会感到不满或易怒，但通常能够控制自己的情绪。';
            } else if (results.hostilityScore <= 3) {
                severity = '中度';
                advice = '您可能经常感到愤怒或有攻击性想法。建议学习情绪管理技巧，适当表达情绪。';
            } else {
                severity = '明显';
                advice = '您可能难以控制自己的愤怒情绪，甚至出现攻击性行为。建议寻求专业心理咨询，学习有效的情绪管理策略。';
            }
            
            adviceHTML += `
                <div class="bg-yellow-50 rounded-12 p-2 border border-yellow-100">
                    <p class="font-medium text-black">敌对 (${results.hostilityScore.toFixed(2)}) - ${severity}</p>
                    <p class="text-xs text-black">反映敌对思想与行为。${advice}</p>
                </div>
            `;
        }
        
        // 恐怖
        if (results.phobicAnxietyScore > 1.3) {
            let severity = '';
            let advice = '';
            
            if (results.phobicAnxietyScore <= 2) {
                severity = '轻度';
                advice = '您可能对某些特定事物或场合有轻微的恐惧，但不会对您的生活造成明显影响。';
            } else if (results.phobicAnxietyScore <= 3) {
                severity = '中度';
                advice = '您可能对某些特定场合或事物感到明显恐惧，如社交场合、高处、封闭空间等。建议尝试逐步暴露法克服恐惧，必要时寻求专业帮助。';
            } else {
                severity = '明显';
                advice = '您可能受到严重的恐怖症状困扰，对多种场合或事物产生强烈的恐惧反应。建议寻求专业心理咨询或治疗，如认知行为疗法中的暴露疗法。';
            }
            
            adviceHTML += `
                <div class="bg-indigo-50 rounded-12 p-2 border border-indigo-100">
                    <p class="font-medium text-black">恐怖 (${results.phobicAnxietyScore.toFixed(2)}) - ${severity}</p>
                    <p class="text-xs text-black">反映对特定场合或事物的恐惧。${advice}</p>
                </div>
            `;
        }
        
        // 偏执
        if (results.paranoidIdeationScore > 1.5) {
            let severity = '';
            let advice = '';
            
            if (results.paranoidIdeationScore <= 2) {
                severity = '轻度';
                advice = '您可能偶尔会对他人的意图产生一些怀疑，但通常能够理性看待。';
            } else if (results.paranoidIdeationScore <= 3) {
                severity = '中度';
                advice = '您可能经常对他人的意图或行为持怀疑态度，容易误解他人的言行。建议尝试信任他人，减少不必要的猜疑。';
            } else {
                severity = '明显';
                advice = '您可能存在明显的偏执观念，如无端猜疑、被害妄想等。建议寻求专业心理医生或精神科医师的评估和治疗。';
            }
            
            adviceHTML += `
                <div class="bg-pink-50 rounded-12 p-2 border border-pink-100">
                    <p class="font-medium text-black">偏执 (${results.paranoidIdeationScore.toFixed(2)}) - ${severity}</p>
                    <p class="text-xs text-black">反映猜疑、投射性思维等。${advice}</p>
                </div>
            `;
        }
        
        // 精神病性
        if (results.psychoticismScore > 1.2) {
            let severity = '';
            let advice = '';
            
            if (results.psychoticismScore <= 2) {
                severity = '轻度';
                advice = '您可能偶尔会有一些不寻常的想法或感知体验，但这些不会对您的生活造成明显影响。';
            } else if (results.psychoticismScore <= 3) {
                severity = '中度';
                advice = '您可能出现一些较为明显的精神病性症状，如幻觉、妄想或思维障碍。建议密切关注自己的精神状态，寻求专业评估。';
            } else {
                severity = '明显';
                advice = '您可能出现严重的精神病性症状，如持续的幻觉、妄想或思维混乱。建议尽快寻求专业精神科医师的诊断和治疗。';
            }
            
            adviceHTML += `
                <div class="bg-teal-50 rounded-12 p-2 border border-teal-100">
                    <p class="font-medium text-black">精神病性 (${results.psychoticismScore.toFixed(2)}) - ${severity}</p>
                    <p class="text-xs text-black">反映精神病性症状。${advice}</p>
                </div>
            `;
        }
        
        // 如果没有明显问题
        if (
            results.somatizationScore <= 1.5 &&
            results.obsessiveCompulsiveScore <= 1.6 &&
            results.interpersonalScore <= 1.7 &&
            results.depressionScore <= 1.6 &&
            results.anxietyScore <= 1.5 &&
            results.hostilityScore <= 1.5 &&
            results.phobicAnxietyScore <= 1.3 &&
            results.paranoidIdeationScore <= 1.5 &&
            results.psychoticismScore <= 1.2
        ) {
            adviceHTML += '<p class="text-muted">您在各维度的得分均在正常范围内，表明您的心理状态较为平衡和健康。继续保持良好的生活习惯和积极的心态。</p>';
        }
        
        adviceHTML += '</div>';
        adviceHTML += '</div>';
        
        // 专业建议 - 根据测试结果提供个性化建议
        adviceHTML += '<div class="mt-3">';
        adviceHTML += '<h4 class="font-semibold text-black text-sm mb-2">专业建议</h4>';
        
        // 根据测试结果提供不同的专业建议
        let adviceTitle = '';
        let adviceClass = '';
        let adviceItems = [];
        
        if (results.totalScore <= 160 && results.positiveItems <= 43 && results.symptomIndex <= 1.67) {
            // 心理健康状况良好
            adviceTitle = '心理健康维护';
            adviceClass = 'bg-green-50 border-green-200';
            adviceItems = [
                '继续保持健康的生活方式和积极的心态',
                '定期进行自我心理评估，关注情绪变化',
                '培养更多兴趣爱好，丰富精神生活',
                '建立良好的社会支持系统，与亲友保持良好沟通',
                '学习更多心理健康知识，提高心理韧性'
            ];
        } else if (results.totalScore <= 200 && results.positiveItems <= 60 && results.symptomIndex <= 2) {
            // 心理健康状况基本良好
            adviceTitle = '心理调适建议';
            adviceClass = 'bg-blue-50 border-blue-200';
            adviceItems = [
                '学习压力管理技巧，如时间管理、任务分解',
                '尝试放松训练，如深呼吸、渐进式肌肉放松',
                '保持规律作息，适当增加体育锻炼',
                '减少工作或生活压力，合理安排休息时间',
                '与亲友分享感受，获得情感支持'
            ];
        } else if (results.totalScore <= 250 && results.positiveItems <= 70 && results.symptomIndex <= 2.5) {
            // 心理健康状况一般，需关注
            adviceTitle = '心理改善建议';
            adviceClass = 'bg-yellow-50 border-yellow-200';
            adviceItems = [
                '寻求专业心理咨询，了解更多应对策略',
                '学习情绪调节技巧，提高情绪管理能力',
                '建立健康的生活习惯，改善饮食和睡眠质量',
                '适当减少工作或学习压力，避免过度劳累',
                '参加社交活动，扩大社交圈子，减少孤独感'
            ];
        } else {
            // 心理健康状况较差，需重视
            adviceTitle = '紧急干预建议';
            adviceClass = 'bg-red-50 border-red-200';
            adviceItems = [
                '尽快寻求专业心理医生或精神科医师的帮助',
                '考虑接受心理治疗或必要的药物治疗',
                '避免独处，与亲友保持密切联系',
                '减少工作或学习压力，必要时暂停工作或学习',
                '学习简单的自我安抚技巧，如深呼吸、正念冥想'
            ];
        }
        
        adviceHTML += `<div class="rounded-16 p-4 border ${adviceClass}">`;
        adviceHTML += `<h5 class="font-medium text-black mb-3">${adviceTitle}</h5>`;
        adviceHTML += '<ul class="list-disc list-inside text-xs text-black space-y-2">';
        
        adviceItems.forEach(item => {
            adviceHTML += `<li>${item}</li>`;
        });
        
        adviceHTML += '</ul>';
        adviceHTML += '</div>';
        adviceHTML += '</div>';
        
        adviceHTML += `
            <div class="mt-3 p-3 bg-secondary/5 rounded-16 border border-secondary/10">
                <h5 class="font-medium text-secondary mb-2">日常心理健康维护</h5>
                <ul class="list-disc list-inside text-xs text-green-700 space-y-1">
                    <li>保持规律作息，确保充足睡眠（7-8小时/天）</li>
                    <li>坚持适度体育锻炼，每周至少150分钟</li>
                    <li>培养积极乐观心态，学习压力管理技巧</li>
                    <li>维护良好人际关系，适当参与社交活动</li>
                    <li>学习放松技巧，如深呼吸、冥想等</li>
                    <li>保持均衡饮食，减少咖啡因和酒精摄入</li>
                </ul>
            </div>
        `;
        
        // 专业帮助建议
        if (results.totalScore > 200 || results.symptomIndex > 2 || 
            results.depressionScore > 2.5 || results.anxietyScore > 2.5 || 
            results.psychoticismScore > 2.5) {
            adviceHTML += `
                <div class="mt-3 p-3 bg-red-50 rounded-12 border border-red-100">
                    <h4 class="font-medium text-red-500 mb-2">专业帮助建议</h4>
                    <p class="text-xs text-muted">根据您的测试结果，建议您考虑寻求专业的心理健康服务：</p>
                    <ul class="list-disc list-inside text-xs text-muted space-y-1 mt-1">
                        <li>心理咨询师：提供心理评估、心理咨询和心理治疗</li>
                        <li>心理医生/精神科医师：提供专业诊断和必要的药物治疗</li>
                        <li>心理健康热线：提供24小时心理支持和危机干预</li>
                    </ul>
                    <p class="text-xs text-muted mt-2">请记住，寻求帮助是勇敢的表现，专业的心理健康服务可以帮助您更好地应对心理困扰。</p>
                </div>
            `;
        }
        
        // 结果说明
        adviceHTML += `
            <div class="mt-3 p-2 bg-light rounded-12">
                <p class="text-xs text-muted">
                    <i class="fa fa-info-circle mr-1"></i> 本测试结果仅供参考，不替代专业医疗诊断。
                    如有严重心理困扰，请及时寻求专业心理医生或精神科医师的帮助。
                </p>
            </div>
        `;
        
        this.elements.resultAdvice.innerHTML = adviceHTML;
    },
    
    // 保存结果到历史记录
    saveResultToHistory() {
        if (!AppData.state.results) return;
        
        // 获取历史记录
        let history = JSON.parse(localStorage.getItem('soulTestHistory') || '[]');
        
        // 添加新结果
        history.push({
            date: new Date().toLocaleString(),
            results: AppData.state.results
        });
        
        // 限制历史记录数量（最多保存10条）
        if (history.length > 10) {
            history = history.slice(-10);
        }
        
        // 保存历史记录
        localStorage.setItem('soulTestHistory', JSON.stringify(history));
    },
    
    // 更新我的页面
    updateMyPage() {
        if (!this.elements.myResultsList) return;
        
        // 获取历史记录
        const history = JSON.parse(localStorage.getItem('soulTestHistory') || '[]');
        
        // 显示历史记录
        if (history.length === 0) {
            this.elements.myResultsList.innerHTML = `
                <div class="text-center py-6 text-muted">
                    <i class="fa fa-history text-2xl mb-2"></i>
                    <p>暂无测试记录</p>
                </div>
            `;
        } else {
            let historyHTML = '';
            
            history.forEach((item, index) => {
                const results = item.results;
                
                // 确定状态
                let status = 'normal';
                let statusText = '正常';
                let statusColor = 'text-green-500';
                
                if (results.totalScore > 200 || results.positiveItems > 60 || results.symptomIndex > 2) {
                    status = 'warning';
                    statusText = '需关注';
                    statusColor = 'text-yellow-500';
                }
                
                if (results.totalScore > 250 || results.positiveItems > 70 || results.symptomIndex > 2.5) {
                    status = 'danger';
                    statusText = '需重视';
                    statusColor = 'text-red-500';
                }
                
                historyHTML += `
                    <div class="bg-white rounded-12 p-3 border border-gray-100">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-sm font-medium">测试 ${index + 1}</span>
                            <span class="text-xs text-muted">${item.date}</span>
                        </div>
                        
                        <div class="grid grid-cols-3 gap-2 text-center mb-2">
                            <div>
                                <p class="text-xs text-muted">总分</p>
                                <p class="text-sm font-medium">${results.totalScore}</p>
                            </div>
                            <div>
                                <p class="text-xs text-muted">阳性项目</p>
                                <p class="text-sm font-medium">${results.positiveItems}</p>
                            </div>
                            <div>
                                <p class="text-xs text-muted">症状指数</p>
                                <p class="text-sm font-medium">${results.symptomIndex.toFixed(2)}</p>
                            </div>
                        </div>
                        
                        <div class="flex justify-between items-center">
                            <span class="text-xs ${statusColor}">
                                <i class="fa fa-circle ${status === 'normal' ? 'text-xs' : 'text-[8px]'} mr-1"></i> ${statusText}
                            </span>
                            <button class="view-result-btn text-xs text-primary hover:underline" data-index="${index}">
                                查看详情
                            </button>
                        </div>
                    </div>
                `;
            });
            
            this.elements.myResultsList.innerHTML = historyHTML;
            
            // 绑定查看详情按钮事件
            document.querySelectorAll('.view-result-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const index = parseInt(btn.dataset.index);
                    AppData.state.results = history[index].results;
                    App.navigateTo('result');
                });
            });
        }
    },
    
    // 清除测试记录
    clearResults() {
        if (confirm('确定要清除所有测试记录吗？此操作不可撤销。')) {
            localStorage.removeItem('soulTestHistory');
            this.updateMyPage();
        }
    }
};

// ======== 应用主逻辑 ========
const App = {
    // 初始化应用
    init() {
        PageController.init();
    },
    
    // 导航到指定页面
    navigateTo(pageName) {
        PageController.showPage(pageName);
    },
    
    // 计算测试结果
    calculateResults() {
        const answers = AppData.state.answers;
        
        // 计算总分
        const totalScore = answers.reduce((sum, score) => sum + score, 0);
        
        // 计算阳性项目数（得分>=2的项目）
        const positiveItems = answers.filter(score => score >= 2).length;
        
        // 计算总症状指数
        const symptomIndex = totalScore / AppData.questions.length;
        
        // 计算阳性症状均分
        const positiveSymptomMean = positiveItems > 0 ? (totalScore - positiveItems) / positiveItems : 0;
        
        // 计算各因子分
        const somatizationScore = this.calculateFactorScore(AppData.factorIndices.somatization, answers);
        const obsessiveCompulsiveScore = this.calculateFactorScore(AppData.factorIndices.强迫症状, answers);
        const interpersonalScore = this.calculateFactorScore(AppData.factorIndices.interpersonal, answers);
        const depressionScore = this.calculateFactorScore(AppData.factorIndices.depression, answers);
        const anxietyScore = this.calculateFactorScore(AppData.factorIndices.anxiety, answers);
        const hostilityScore = this.calculateFactorScore(AppData.factorIndices.hostility, answers);
        const phobicAnxietyScore = this.calculateFactorScore(AppData.factorIndices.phobicAnxiety, answers);
        const paranoidIdeationScore = this.calculateFactorScore(AppData.factorIndices.paranoidIdeation, answers);
        const psychoticismScore = this.calculateFactorScore(AppData.factorIndices.psychoticism, answers);
        const otherScore = this.calculateFactorScore(AppData.factorIndices.other, answers);
        
        // 保存结果
        AppData.state.results = {
            totalScore,
            positiveItems,
            symptomIndex,
            positiveSymptomMean,
            somatizationScore,
            obsessiveCompulsiveScore,
            interpersonalScore,
            depressionScore,
            anxietyScore,
            hostilityScore,
            phobicAnxietyScore,
            paranoidIdeationScore,
            psychoticismScore,
            otherScore
        };
        
        AppData.saveState();
    },
    
    // 计算因子分
    calculateFactorScore(factorIndices, answers) {
        // 过滤出因子包含的题目答案
        const factorAnswers = factorIndices.map(index => answers[index] || 1);
        
        // 计算因子分（平均分）
        const factorScore = factorAnswers.reduce((sum, score) => sum + score, 0) / factorIndices.length;
        
        return factorScore;
    }
};

// ======== 初始化应用 ========
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
