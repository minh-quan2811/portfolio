const projectYoloFire = {
  id: 0,
  year: '2023',
  color: 'r',
  tag: 'COMPUTER VISION · REAL-TIME',
  range: '2023',
  title: 'YOLOv8 Fire Detection',
  pills: ['YOLOv8', 'Python', 'OpenCV', 'PyTorch'],
  impact: 'REAL-TIME',
  status: 'done',
  statusTxt: 'COMPLETED',
  desc: '"Built a real-time fire detection system using YOLOv8, trained on fire and smoke datasets for accurate detection in surveillance scenarios."',
  details: {
    overview:
      'Developed a real-time fire and smoke detection system using YOLOv8. Trained on custom fire and smoke datasets and optimized the inference pipeline for surveillance camera deployments. Detects fire with high accuracy at low latency, suitable for live monitoring.',
    stats: [
      { name: 'DETECTION MODEL', val: 'YOLOv8' },
      { name: 'INFERENCE', val: 'REAL-TIME' },
      { name: 'USE CASE', val: 'SURVEILLANCE' },
      { name: 'STATUS', val: 'COMPLETED' },
    ],
    crew: [
      { role: 'CAPTAIN', name: 'Solo Project', note: 'Training, optimization, deployment' },
      { role: 'CREW SIZE', name: '1 Person', note: 'Full ownership' },
    ],
    stack: ['YOLOv8', 'Python', 'OpenCV', 'PyTorch', 'CUDA'],
    highlights: [
      'Trained YOLOv8 on labeled fire and smoke datasets',
      'Optimized inference pipeline for real-time surveillance feeds',
      'Achieved fast detection latency suitable for live camera input',
      'Focus: computer vision and real-time monitoring systems',
    ],
  },
};

export default projectYoloFire;