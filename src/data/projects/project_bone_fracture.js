const projectBoneFracture = {
  id: 5,
  year: '2025',
  color: 'b',
  tag: 'MEDICAL IMAGING · AI DIAGNOSIS',
  range: '2025',
  title: 'Bone Fracture Detection',
  pills: ['DETR', 'YOLOv8', 'LangChain', 'RAG'],
  impact: 'MEDICAL AI',
  status: 'done',
  statusTxt: 'COMPLETED',
  desc: '"Built deep learning models for bone fracture detection with a web-based diagnostic interface and an integrated RAG chatbot assistant for clinical support."',
  details: {
    overview:
      'Developed a bone fracture detection system using DETR and YOLOv8 deep learning models trained on medical imaging data. Built a web-based diagnostic interface for radiologists, and integrated a LangChain RAG chatbot to answer clinical questions related to detected fractures.',
    stats: [
      { name: 'MODELS', val: 'DETR + YOLOv8' },
      { name: 'DOMAIN', val: 'MEDICAL IMAGING' },
      { name: 'INTERFACE', val: 'WEB-BASED' },
      { name: 'STATUS', val: 'COMPLETED' },
    ],
    crew: [
      { role: 'CAPTAIN', name: 'Solo Project', note: 'Models, interface, and chatbot' },
      { role: 'CREW SIZE', name: '1 Person', note: 'End-to-end delivery' },
    ],
    stack: ['DETR', 'YOLOv8', 'PyTorch', 'LangChain', 'RAG', 'Python'],
    highlights: [
      'Dual model approach: DETR for detection accuracy, YOLOv8 for fast inference',
      'Web-based diagnostic interface built for radiologist review',
      'RAG chatbot assistant for clinical question answering on findings',
      'Focus: medical imaging and AI-assisted diagnosis',
    ],
  },
};

export default projectBoneFracture;