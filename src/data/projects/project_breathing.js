const projectBreathing = {
  id: 1,
  year: '2024',
  color: 'b',
  tag: 'SIGNAL PROCESSING · AI + IOT',
  range: '2024',
  title: 'Breathing & Emotion Recognition',
  pills: ['PyTorch', 'HuggingFace', 'WiFi CSI', 'Python'],
  impact: 'WiFi-BASED AI',
  status: 'done',
  statusTxt: 'COMPLETED',
  desc: '"Detected breathing patterns and emotions using WiFi CSI signals — no camera, no wearable. Just radio waves and deep learning."',
  details: {
    overview:
      'Developed a contactless system to detect breathing patterns and emotional states using WiFi Channel State Information signals. Applied deep learning with PyTorch and HuggingFace for classification, improving accuracy through feature extraction techniques tailored to wireless signal data.',
    stats: [
      { name: 'DATA SOURCE', val: 'WIFI CSI' },
      { name: 'FRAMEWORK', val: 'PYTORCH' },
      { name: 'TASK', val: 'CLASSIFICATION' },
      { name: 'STATUS', val: 'COMPLETED' },
    ],
    crew: [
      { role: 'CAPTAIN', name: 'Solo Project', note: 'Signal processing to deployment' },
      { role: 'CREW SIZE', name: '1 Person', note: 'Full ownership of pipeline' },
    ],
    stack: ['PyTorch', 'HuggingFace', 'Python', 'WiFi CSI', 'NumPy', 'scikit-learn'],
    highlights: [
      'Contactless detection using only WiFi signal — no camera or wearable',
      'Deep learning model for breathing pattern and emotion classification',
      'Custom feature extraction pipeline designed for noisy CSI data',
      'Focus: signal processing and AI + IoT integration',
    ],
  },
};

export default projectBreathing;