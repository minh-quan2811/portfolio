const projectRikai = {
  id: 4,
  year: '2025',
  color: 'r',
  tag: 'LLM · RAG SYSTEMS · COMPANY',
  range: '2025',
  title: 'RIKAI AI Chatbot',
  pills: ['LangGraph', 'LangChain', 'LlamaIndex', 'Qdrant'],
  impact: 'PRODUCTION',
  status: 'done',
  statusTxt: 'COMPLETED',
  desc: '"Built a marketing AI chatbot using LangGraph and LangChain with a full vector database pipeline — context-aware responses powered by RAG."',
  details: {
    overview:
      'Developed a production marketing AI chatbot for a company project under RIKAI. Built a vector database pipeline using LlamaIndex and Qdrant for document ingestion and retrieval. Used LangGraph and LangChain to orchestrate context-aware, multi-turn conversations tailored for marketing queries.',
    stats: [
      { name: 'ORCHESTRATION', val: 'LANGGRAPH' },
      { name: 'VECTOR DB', val: 'QDRANT' },
      { name: 'PIPELINE', val: 'LLAMAINDEX' },
      { name: 'TYPE', val: 'COMPANY PROJECT' },
    ],
    crew: [
      { role: 'CONTEXT', name: 'Company Project', note: 'Delivered for RIKAI' },
      { role: 'ROLE', name: 'AI Engineer', note: 'RAG pipeline and chatbot design' },
    ],
    stack: ['LangGraph', 'LangChain', 'LlamaIndex', 'Qdrant', 'Python', 'OpenAI'],
    highlights: [
      'Vector database pipeline with LlamaIndex and Qdrant for semantic retrieval',
      'LangGraph stateful orchestration for multi-turn conversation management',
      'Context-aware responses optimized for marketing query patterns',
      'Focus: LLM applications and production RAG systems',
    ],
  },
};

export default projectRikai;