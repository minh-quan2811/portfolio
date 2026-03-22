const projectStudentPerf = {
  id: 2,
  year: '2025',
  color: 'g',
  tag: 'MACHINE LEARNING · DATA ANALYSIS',
  range: '2025',
  title: 'Student Performance Prediction',
  pills: ['scikit-learn', 'SMOTE', 'Python', 'Pandas'],
  impact: '~93% ACCURACY',
  status: 'done',
  statusTxt: 'COMPLETED',
  desc: '"Built ML models to predict student outcomes based on learning data, with a fully optimized training pipeline including SMOTE balancing and feature scaling."',
  details: {
    overview:
      'Built machine learning models to predict student academic outcomes from historical learning data. Used scikit-learn with a full preprocessing pipeline including SMOTE for class balancing, feature scaling, and hyperparameter tuning. Achieved approximately 93% accuracy on the test set.',
    stats: [
      { name: 'ACCURACY', val: '~93%' },
      { name: 'FRAMEWORK', val: 'SCIKIT-LEARN' },
      { name: 'BALANCING', val: 'SMOTE' },
      { name: 'STATUS', val: 'COMPLETED' },
    ],
    crew: [
      { role: 'CAPTAIN', name: 'Solo Project', note: 'Data processing to evaluation' },
      { role: 'CREW SIZE', name: '1 Person', note: 'Full ownership' },
    ],
    stack: ['Python', 'scikit-learn', 'SMOTE', 'Pandas', 'NumPy', 'Matplotlib'],
    highlights: [
      'SMOTE applied to handle imbalanced class distribution in training data',
      'Full preprocessing pipeline with feature scaling and encoding',
      'Hyperparameter tuning for optimal model performance',
      'Focus: machine learning and educational data analysis',
    ],
  },
};

export default projectStudentPerf;