// AI Knowledge Base with extensive Q&A pairs
        const aiKnowledgeBase = {
            // Core AI Terminology
            "what is artificial intelligence": {
                answer: "Artificial Intelligence (AI) is the simulation of human intelligence in machines programmed to think and learn like humans. It includes reasoning, learning, perception, and decision-making capabilities.",
                visual: " AI encompasses various subfields including Machine Learning, Natural Language Processing, Computer Vision, and Robotics.",
                followUps: ["What's the difference between AI and ML?", "What are the types of AI?", "How does AI work?"],
                citations: "Reference: Course Module 1 - Introduction to AI Fundamentals",
                learningLink: "#ai-fundamentals-module1"
            },
            
            "what is machine learning": {
                answer: "Machine Learning (ML) is a subset of AI that enables computers to learn and improve from experience without being explicitly programmed. It uses algorithms to analyze data, identify patterns, and make predictions.",
                visual: " ML Types: Supervised Learning → Unsupervised Learning → Reinforcement Learning",
                followUps: ["What's supervised learning?", "How does ML differ from traditional programming?", "What are ML algorithms?"],
                citations: "Reference: Course Module 2 - Machine Learning Fundamentals",
                learningLink: "#ml-fundamentals-module2"
            },

            "what is deep learning": {
                answer: "Deep Learning is a specialized subset of Machine Learning that uses artificial neural networks with multiple layers (hence 'deep') to model and understand complex patterns in data. It's inspired by the human brain's structure.",
                visual: " Input Layer → Hidden Layers → Output Layer (Neural network with multiple interconnected layers)",
                followUps: ["How do neural networks work?", "What's the difference between ML and Deep Learning?", "What are popular deep learning frameworks?"],
                citations: "Reference: Course Module 3 - Deep Learning and Neural Networks",
                learningLink: "#deep-learning-module3"
            },

            "difference between ai ml and deep learning": {
                answer: "AI is the broadest concept (machines mimicking human intelligence), ML is a subset of AI (learning from data without explicit programming), and Deep Learning is a subset of ML (using multi-layered neural networks).",
                visual: " AI ⊃ Machine Learning ⊃ Deep Learning (Each is a subset of the previous)",
                followUps: ["Which one should I learn first?", "What are practical applications of each?", "How do they relate to data science?"],
                citations: "Reference: Course Module 1 - AI Hierarchy and Relationships",
                learningLink: "#ai-hierarchy-comparison"
            },

            "what is nlp": {
                answer: "Natural Language Processing (NLP) is a branch of AI that helps computers understand, interpret, and generate human language. It combines computational linguistics with machine learning and deep learning.",
                visual: " NLP Pipeline: Text Input → Tokenization → Analysis → Understanding → Response Generation",
                followUps: ["What are NLP applications?", "How do chatbots work?", "What is sentiment analysis?"],
                citations: "Reference: Course Module 4 - Natural Language Processing",
                learningLink: "#nlp-fundamentals-module4"
            },

            "what are neural networks": {
                answer: "Neural networks are computing systems inspired by biological neural networks. They consist of interconnected nodes (neurons) organized in layers that process information and learn patterns from data.",
                visual: " Neuron Structure: Inputs → Weights → Activation Function → Output",
                followUps: ["How do neurons in networks communicate?", "What are activation functions?", "What's backpropagation?"],
                citations: "Reference: Course Module 3 - Neural Network Architecture",
                learningLink: "#neural-networks-deep-dive"
            },

            "what is computer vision": {
                answer: "Computer Vision is an AI field that trains computers to interpret and understand visual information from the world. It processes digital images and videos to extract meaningful information and make decisions.",
                visual: " CV Applications: Image Recognition → Object Detection → Facial Recognition → Medical Imaging",
                followUps: ["How does image recognition work?", "What are CNNs in computer vision?", "What are real-world CV applications?"],
                citations: "Reference: Course Module 5 - Computer Vision Fundamentals",
                learningLink: "#computer-vision-module5"
            },

            // Real-world Applications
            "ai applications": {
                answer: "AI has numerous real-world applications: Healthcare (diagnosis, drug discovery), Finance (fraud detection, trading), Transportation (autonomous vehicles), Entertainment (recommendations), Smart homes, and Customer service (chatbots).",
                visual: " AI Impact Areas: Healthcare , Finance , Transportation , Entertainment , Security ",
                followUps: ["How is AI used in healthcare?", "What about AI in finance?", "Tell me about autonomous vehicles"],
                citations: "Reference: Course Module 6 - AI Applications and Case Studies",
                learningLink: "#ai-applications-module6"
            },

            "ai in healthcare": {
                answer: "AI in healthcare includes medical imaging analysis, drug discovery, personalized treatment plans, robotic surgery, virtual health assistants, and predictive analytics for disease prevention.",
                visual: " Healthcare AI: Diagnostic Imaging → Drug Discovery → Treatment Planning → Surgical Robots",
                followUps: ["How accurate is AI in medical diagnosis?", "What are the challenges of AI in healthcare?", "Is AI replacing doctors?"],
                citations: "Reference: Course Module 6 - Healthcare AI Applications",
                learningLink: "#healthcare-ai-applications"
            },

            // AI Ethics
            "ai ethics": {
                answer: "AI Ethics addresses moral and ethical implications of AI systems, including bias, fairness, transparency, privacy, accountability, and the societal impact of AI decisions. It ensures AI serves humanity responsibly.",
                visual: " Key Ethical Considerations: Bias & Fairness → Privacy → Transparency → Accountability → Human Rights",
                followUps: ["What is algorithmic bias?", "How can we make AI more transparent?", "What are AI governance frameworks?"],
                citations: "Reference: Course Module 7 - AI Ethics and Responsible AI",
                learningLink: "#ai-ethics-module7"
            },

            "algorithmic bias": {
                answer: "Algorithmic bias occurs when AI systems produce systematically prejudiced results due to biased training data, flawed algorithms, or problematic assumptions. This can perpetuate discrimination against certain groups.",
                visual: "⚠️ Bias Sources: Training Data → Algorithm Design → Human Prejudices → Feedback Loops",
                followUps: ["How can we detect bias in AI?", "What are bias mitigation strategies?", "Are there real examples of AI bias?"],
                citations: "Reference: Course Module 7 - Understanding and Mitigating AI Bias",
                learningLink: "#algorithmic-bias-prevention"
            },

            // Advanced Concepts
            "what are llms": {
                answer: "Large Language Models (LLMs) are AI systems trained on vast amounts of text data to understand and generate human-like text. Examples include GPT, BERT, and other transformer-based models that power modern AI assistants.",
                visual: " LLM Architecture: Massive Text Data → Transformer Architecture → Pre-training → Fine-tuning → Applications",
                followUps: ["How are LLMs trained?", "What is the transformer architecture?", "What can LLMs do?"],
                citations: "Reference: Course Module 8 - Large Language Models and Transformers",
                learningLink: "#llm-fundamentals-module8"
            },

            "supervised learning": {
                answer: "Supervised learning is a type of machine learning where algorithms learn from labeled training data to make predictions on new, unseen data. It includes classification (predicting categories) and regression (predicting continuous values).",
                visual: " Supervised Learning: Labeled Data → Training → Model → Predictions on New Data",
                followUps: ["What's the difference between classification and regression?", "What are common supervised learning algorithms?", "How do you evaluate supervised models?"],
                citations: "Reference: Course Module 2 - Supervised Learning Techniques",
                learningLink: "#supervised-learning-deep-dive"
            },

            "unsupervised learning": {
                answer: "Unsupervised learning finds hidden patterns in data without labeled examples. It includes clustering (grouping similar data), dimensionality reduction, and association rule mining to discover relationships in data.",
                visual: " Unsupervised Learning: Unlabeled Data → Pattern Discovery → Clusters/Rules/Structures",
                followUps: ["What is clustering?", "What's dimensionality reduction?", "When do you use unsupervised learning?"],
                citations: "Reference: Course Module 2 - Unsupervised Learning Methods",
                learningLink: "#unsupervised-learning-techniques"
            },

            "reinforcement learning": {
                answer: "Reinforcement Learning (RL) is where an agent learns to make decisions by interacting with an environment, receiving rewards or penalties for actions. It's used in gaming, robotics, and autonomous systems.",
                visual: " RL Loop: Agent → Action → Environment → Reward/Penalty → Learning → Better Actions",
                followUps: ["How does Q-learning work?", "What are RL applications?", "What's the explore vs exploit dilemma?"],
                citations: "Reference: Course Module 2 - Reinforcement Learning Fundamentals",
                learningLink: "#reinforcement-learning-guide"
            }
        };

        // Conversation flows
        const conversationFlows = {
            basics: [
                "What is artificial intelligence?",
                "What's the difference between AI, ML, and Deep Learning?",
                "What are the main types of machine learning?"
            ],
            nlp: [
                "What is NLP?",
                "How do chatbots work?",
                "What are Large Language Models?"
            ],
            ethics: [
                "What is AI ethics?",
                "What is algorithmic bias?",
                "How can we make AI more fair and transparent?"
            ],
            applications: [
                "What are real-world AI applications?",
                "How is AI used in healthcare?",
                "What about AI in autonomous vehicles?"
            ],
            terminology: [
                "What are neural networks?",
                "What is computer vision?",
                "What's the difference between supervised and unsupervised learning?"
            ]
        };

        function addMessage(content, isUser = false, hasFollowUps = false, followUps = []) {
            const messagesContainer = document.getElementById('messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
            
            if (isUser) {
                messageDiv.innerHTML = `<div class="message-content">${content}</div>`;
            } else {
                messageDiv.innerHTML = `
                    <div class="bot-avatar">TA</div>
                    <div class="message-content">
                        ${content}
                        ${hasFollowUps ? `
                            <div class="follow-up-questions">
                                ${followUps.map(q => `<button class="follow-up-btn" onclick="askFollowUp('${q}')">${q}</button>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                `;
            }
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function isAIRelated(question) {
            const aiKeywords = [
                'ai', 'artificial intelligence', 'machine learning', 'ml', 'deep learning', 
                'neural network', 'nlp', 'natural language', 'computer vision', 'algorithm',
                'data science', 'chatbot', 'automation', 'robot', 'llm', 'language model',
                'supervised', 'unsupervised', 'reinforcement', 'classification', 'regression',
                'clustering', 'bias', 'ethics', 'tensorflow', 'pytorch', 'opencv',
                'transformer', 'bert', 'gpt', 'cnn', 'rnn', 'backpropagation'
            ];
            
            return aiKeywords.some(keyword => 
                question.toLowerCase().includes(keyword)
            );
        }

        function findBestMatch(question) {
            const normalizedQuestion = question.toLowerCase().trim();
            
            // Direct matches
            if (aiKnowledgeBase[normalizedQuestion]) {
                return aiKnowledgeBase[normalizedQuestion];
            }
            
            // Partial matches
            for (const [key, value] of Object.entries(aiKnowledgeBase)) {
                if (normalizedQuestion.includes(key) || key.includes(normalizedQuestion)) {
                    return value;
                }
            }
            
            // Keyword-based matching
            const keywords = normalizedQuestion.split(' ');
            for (const [key, value] of Object.entries(aiKnowledgeBase)) {
                const keyWords = key.split(' ');
                const matchCount = keywords.filter(k => keyWords.some(kw => kw.includes(k) || k.includes(kw))).length;
                if (matchCount >= 2) {
                    return value;
                }
            }
            
            return null;
        }

        function processMessage(message) {
            if (!isAIRelated(message)) {
                return {
                    answer: "I apologize, but I can only answer questions related to Artificial Intelligence, Machine Learning, Deep Learning, and related AI topics. Please ask me something about AI, and I'll be happy to help! 🤖",
                    visual: "🚫 Non-AI Question Detected - Please ask about AI topics",
                    followUps: ["What is artificial intelligence?", "Tell me about machine learning", "What are AI applications?"],
                    citations: "",
                    learningLink: ""
                };
            }
            
            const match = findBestMatch(message);
            if (match) {
                return match;
            }
            
            // Default AI-related response when no specific match is found
            return {
                answer: "That's an interesting AI question! While I don't have a specific answer for that exact question, I can help you with topics like AI fundamentals, machine learning, deep learning, NLP, computer vision, AI ethics, and real-world applications. Could you try rephrasing your question or choose from one of my specialties?",
                visual: "🤔 Let me help you find the right AI information!",
                followUps: ["What is artificial intelligence?", "Explain machine learning basics", "Tell me about AI applications"],
                citations: "Reference: TechAid Bot Knowledge Base",
                learningLink: "#ai-fundamentals"
            };
        }

        function sendMessage() {
            const input = document.getElementById('userInput');
            const message = input.value.trim();
            
            if (!message) return;
            
            // Add user message
            addMessage(message, true);
            
            // Process and add bot response
            const response = processMessage(message);
            let botResponse = response.answer;
            
            if (response.visual) {
                botResponse += `<div class="visual-content">${response.visual}</div>`;
            }
            
            if (response.citations) {
                botResponse += `<div class="citation">${response.citations}</div>`;
            }
            
            if (response.learningLink) {
                botResponse += `<a href="${response.learningLink}" class="learning-link">📚 Further Learning</a>`;
            }
            
            // Add cross-linking for related concepts
            botResponse = addConceptLinks(botResponse);
            
            addMessage(botResponse, false, response.followUps.length > 0, response.followUps);
            
            input.value = '';
        }

        function addConceptLinks(text) {
            const concepts = {
                'Machine Learning': 'what is machine learning',
                'Deep Learning': 'what is deep learning',
                'Neural Networks': 'what are neural networks',
                'NLP': 'what is nlp',
                'Computer Vision': 'what is computer vision',
                'AI Ethics': 'ai ethics',
                'Supervised Learning': 'supervised learning',
                'Unsupervised Learning': 'unsupervised learning'
            };
            
            let linkedText = text;
            for (const [concept, query] of Object.entries(concepts)) {
                const regex = new RegExp(`\\b${concept}\\b`, 'gi');
                linkedText = linkedText.replace(regex, `<span class="concept-link" onclick="askFollowUp('${query}')">${concept}</span>`);
            }
            
            return linkedText;
        }

        function askFollowUp(question) {
            document.getElementById('userInput').value = question;
            sendMessage();
        }

        function startFlow(flowType) {
            const flow = conversationFlows[flowType];
            if (flow) {
                addMessage(`Starting ${flowType.charAt(0).toUpperCase() + flowType.slice(1)} learning path! Let's begin with these questions:`, false, true, flow);
            }
        }

        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        // Initialize with typing indicator
        window.onload = function() {
            setTimeout(() => {
                addMessage("I'm ready to help you learn about AI! 🚀", false);
            }, 1000);
        };