import projectYoloFire from './project_yolo_fire';
import projectBreathing from './project_breathing';
import projectStudentPerf from './project_student_perf';
import projectStudentMgmt from './project_student_mgmt';
import projectRikai from './project_rikai';
import projectBoneFracture from './project_bone_fracture';
import projectFptMigration from './project_fpt_migration';
import projectCatalyst from './project_catalyst';

const ALL_PROJECTS = [
  projectYoloFire,
  projectBreathing,
  projectStudentPerf,
  projectStudentMgmt,
  projectRikai,
  projectBoneFracture,
  projectFptMigration,
  projectCatalyst,
];

export default ALL_PROJECTS;

export const SEA_NAMES = {
  '2023': 'SABAODY',
  '2024': 'IMPEL DOWN',
  '2025': 'MARINEFORD',
  '2026': 'CURRENT ARC',
};

export const YEARS = [...new Set(ALL_PROJECTS.map((p) => p.year))].sort();