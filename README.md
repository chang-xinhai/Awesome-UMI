<div align="center">

<h1 id="awesome-umi">Awesome-UMI</h1>

<p>
  <strong>A curated map of papers, datasets, policies, and taxonomy for the Universal Manipulation Interface ecosystem.</strong>
</p>

<!-- [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) -->
<!-- [![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com) -->

<p>
  <a href="#umi-core"><img alt="Core" src="https://img.shields.io/badge/Core-UMI%20Foundations-a8d8ff?style=for-the-badge"></a>
  <a href="#umi-method"><img alt="Methods" src="https://img.shields.io/badge/Methods-Robot--Free%20Teaching-b8e6c9?style=for-the-badge"></a>
  <a href="#umi-dataset"><img alt="Datasets" src="https://img.shields.io/badge/Datasets-UMI%20Data-ffd6a5?style=for-the-badge"></a>
  <a href="#umi-policy"><img alt="Policies" src="https://img.shields.io/badge/Policies-Robot%20Learning-d7c5ff?style=for-the-badge"></a>
  <a href="#umi-taxonomy"><img alt="Taxonomy" src="https://img.shields.io/badge/Taxonomy-Ecosystem%20Map-ffb7b2?style=for-the-badge"></a>
</p>

</div>

## About

**Awesome-UMI**: A curated list for the ecosystem around **Universal Manipulation Interface (UMI)**.

This repository focuses on:
- **UMI Core**: foundational papers, official resources, and direct ecosystem-defining follow-ups
- **UMI Method**: strong adjacent methods for robot-free teaching, teleoperation, dexterous manipulation, multimodal sensing, and cross-embodiment transfer
- **UMI Dataset**: official UMI datasets and UMI-native dataset families
- **UMI Policy**: policies trained on UMI-like data or commonly used as relevant baselines/support models
- **UMI Taxonomy**: embodiments, modalities, pose tracking, data formats, deployment-facing notes, and survey-style resources

This list is intentionally **UMI-first**, not a generic robot-manipulation survey.

<p align="center">
  <img src="assets/umi-thumbnail.png" alt="Universal Manipulation Interface paper thumbnail" width="900">
  <br>
  <sub><span style="color: #777;">Source: original UMI project page, <a href="https://umi-gripper.github.io/">umi-gripper.github.io</a>.</span></sub>
</p>

<p align="center">
  <img src="assets/umi-hardware.jpg" alt="Universal Manipulation Interface hardware design" width="900">
  <br>
  <sub><span style="color: #777;">Source: original UMI project page, <a href="https://umi-gripper.github.io/">umi-gripper.github.io</a>.</span></sub>
</p>

## Must Read

Start here if you want the shortest path through the UMI ecosystem.

| Goal | Start with |
| :-- | :-- |
| Understand UMI | [UMI paper](https://arxiv.org/abs/2402.10329), [project](https://umi-gripper.github.io/), [code](https://github.com/real-stanford/universal_manipulation_interface) |
| Find UMI datasets | [UMI Data Community Site](https://umi-data.github.io/) |
| Build on UMI hardware/data collection | [Universal Manipulation Interface Codebase](https://github.com/real-stanford/universal_manipulation_interface), [FastUMI](https://fastumi.com/), [LEGATO](https://ut-hcrl.github.io/LEGATO/), [UMI-FT](https://github.com/real-stanford/UMI-FT), [exUMI](https://silicx.github.io/exUMI/) |
| Explore dexterous UMI-style extensions | [DexUMI](https://arxiv.org/abs/2505.21864), [RealDexUMI](https://arxiv.org/abs/2606.06033), [DexEXO](https://arxiv.org/abs/2603.17323), [MILE](https://arxiv.org/abs/2512.00324), [DexWild](https://dexwild.github.io/) |
| Train UMI-relevant policies | [Hy-Embodied-0.5-VLA](https://arxiv.org/abs/2606.14409), [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/), [ACT / ALOHA](https://tonyzhaozh.github.io/aloha/), [OpenVLA](https://openvla.github.io/) |
| Compare modalities, tracking, and formats | [UMI Taxonomy](#umi-taxonomy), [UMI Data Community Site](https://umi-data.github.io/) |
| Scale robot-free supervision | [VLAff / EgoAffordance](https://arxiv.org/abs/2608.05215), [JoyAI-RA 0.5](https://arxiv.org/abs/2608.05674), [HiFi-UMI](https://arxiv.org/abs/2607.25895) |

## News

- [2026-08-28] Added a second-round deep audit of human-video action recovery, UMI-style capture hardware, cross-embodiment action geometry, and intent-level imitation evaluation.
- [2026-08-20] Deep-audited the UMI lineage and robot-free human-demonstration neighborhood; promoted 26 verified works across core interfaces, dexterous/force capture, human-video transfer, datasets, policies, and taxonomy.
- [2026-08-16] Added SiMDex, C2Dex, TWINS, and Ego2Robot for egocentric human-video mining, monocular dexterous retargeting, wearable isomorphic tactile teaching, and large-scale ego-to-robot data synthesis.
- [2026-08-08] Added the latest cross-embodiment and robot-free learning wave: VLAff/EgoAffordance, JoyAI-RA 0.5, World-to-Wrist, XEWorld, GeniWorld, DyPES-VLA, and MDIR.
- [2026-08-04] Added Behavior Prompting Policy/iPhUMI, DexDirect, ContactFlow, BARX, and TacPrint to cover demonstration prompting, low-setup dexterous capture, embodiment-agnostic contact conditioning, behavior-aligned transfer, and wearable tactile replay.
- [2026-07-30] Added and expanded a dedicated pose-tracking taxonomy covering UMI-used trackers and candidate VIO, LIO, LVIO, RGB-D, event-camera, structured-light, fiducial, learned-monocular, and calibration stacks.
- [2026-07-30] Completed the HiFi-UMI entry with its official project and 2,000-hour public dataset; added its dataset and UMI-only post-training roles.
- [2026-07-26] Added recent UMI-style data engines, teleoperation hardware, cross-embodiment deployment, recovery learning, and force/tactile policies; corrected BifrostUMI's canonical record.
- [2026-06-24] Added TAMEn to UMI methods, datasets, and taxonomy as a tactile-aware closed-loop data collection stack.
- [2026-06-24] Added Hy-Embodied-0.5-VLA, Hy-Embodied-0.5-VLA-Data, FlowPRO, and a deployment constraints taxonomy subsection.
- [2026-06-23] Added HALOMI, EgoGuide, EgoMI, and UMI-on-Air to the UMI method, policy, and taxonomy sections.
- [2026-06-15] Added recent UMI-style dexterous, mobile, whole-body, tactile, benchmark, and VLA resources.
- [2026-04-19] Rebuilt the repository into a single-file `README.md` structure for Awesome-UMI.
- [2026-04-19] Added `AGENTS.md` to define curation scope, metadata rules, and Conventional Commits.

## Contents

- [Awesome-UMI](#awesome-umi)
  - [About](#about)
  - [Must Read](#must-read)
  - [News](#news)
  - [UMI Core](#umi-core)
    - [Foundational Paper](#foundational-paper)
    - [Official Resources](#official-resources)
  - [UMI Method](#umi-method)
    - [Human Demonstration Interfaces](#human-demonstration-interfaces)
    - [Dexterous Hand / DexHand](#dexterous-hand--dexhand)
    - [Multimodal / Force / Tactile](#multimodal--force--tactile)
    - [In-the-Wild / Mobile / Whole-Body](#in-the-wild--mobile--whole-body)
  - [UMI Dataset](#umi-dataset)
    - [Official / Core Datasets](#official--core-datasets)
    - [UMI-native Dataset Families](#umi-native-dataset-families)
    - [Cross-Embodiment / Large-Scale Adjacent Datasets](#cross-embodiment--large-scale-adjacent-datasets)
    - [Dexterous / Hand-centric Datasets](#dexterous--hand-centric-datasets)
    - [Multimodal / Force-aware Datasets](#multimodal--force-aware-datasets)
    - [Mobile / Whole-Body Datasets](#mobile--whole-body-datasets)
  - [UMI Policy](#umi-policy)
    - [Imitation Learning](#imitation-learning)
    - [Reinforcement Learning](#reinforcement-learning)
    - [VLA](#vla)
  - [UMI Taxonomy](#umi-taxonomy)
    - [Embodiments](#embodiments)
    - [Observation Modalities](#observation-modalities)
    - [Pose Tracking / State Estimation](#pose-tracking--state-estimation)
    - [Action Spaces](#action-spaces)
    - [Data Formats / Storage](#data-formats--storage)
    - [Deployment / System Constraints](#deployment--system-constraints)
    - [Evaluation / Surveys / Notes](#evaluation--surveys--notes)
  - [Citation](#citation)
  - [Acknowledgement](#acknowledgement)

## UMI Core

Foundational UMI resources: the original paper, official project/code/data links, and direct ecosystem entry points.

### Foundational Paper

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2024-09-29 | UMI Redesign, Hardware-Independent, Off-the-Shelf Tracking, 10K+ Demos | Shanghai AI Lab | [FastUMI: A Scalable and Hardware-Independent Universal Manipulation Interface with Dataset](https://arxiv.org/abs/2409.19499) | arXiv | [project](https://fastumi.com/) / [data](https://huggingface.co/datasets/IPEC-COMMUNITY/FastUMI-Data) / [github](https://github.com/YdingTeam/FastUMI_Data) |
| 2024-02-15 | UMI, Robot-Free Teaching, Bimanual, Zero-Shot | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) / [github](https://github.com/real-stanford/universal_manipulation_interface) / [data](https://umi-data.github.io/) |

### Official Resources

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2024-02-15 | Official Dataset Index, Data Community | Stanford | [UMI Data Community Site](https://umi-data.github.io/) | Website | [page](https://umi-data.github.io/) |
| 2024-02-15 | Official Code, Training Stack | Stanford | [Universal Manipulation Interface Codebase](https://github.com/real-stanford/universal_manipulation_interface) | GitHub | [github](https://github.com/real-stanford/universal_manipulation_interface) |
| 2024-02-15 | Official Project Page | Stanford | [UMI Project Page](https://umi-gripper.github.io/) | Website | [project](https://umi-gripper.github.io/) |

## UMI Method

Methods for UMI-style robot-free teaching, teleoperation, cross-embodiment transfer, dexterous manipulation, and multimodal deployment.

### Human Demonstration Interfaces

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-20 | Handheld Capture, Co-Designed Robot Gripper, Dual-Thumb, Learning from Demonstration | RAI Institute | [Koala Gripper: Co-designing Robotic Grippers and Data-Capture Devices for Scaling Dexterous Manipulation Learning](https://arxiv.org/abs/2608.20546) | arXiv | [project](https://koalagripper.rai-inst.com/) |
| 2026-08-19 | Human-to-Robot Video Editing, 14M Frames, Seven Embodiments, 3D Hand States | UCLA | [RoboEdit: Turning Human Manipulation Videos into Scalable Robot Experience](https://arxiv.org/abs/2608.18948) | arXiv | [paper](https://arxiv.org/html/2608.18948) |
| 2026-08-17 | Visual-Haptic Teleoperation, Low-Cost, Vibrotactile Feedback, LEAP Hand | Tohoku University | [ViHaTeleop: A Low-Cost, Lightweight Visual-Haptic Teleoperation System for Dexterous Manipulation Learning](https://arxiv.org/abs/2608.16572) | IROS 2026 | [project](https://laiyanhou.github.io/ViHaTeleop-website/) |
| 2026-08-08 | Open Hardware, Stereo-Inertial, Egocentric, 550 Hours | FPV Labs | [Ego-OSCAR: Egocentric Open source Stereo CAptuRe System](https://arxiv.org/abs/2608.08285) | arXiv | [paper](https://arxiv.org/abs/2608.08285) |
| 2026-08-06 | Egocentric + Simulation + Robot Data, Dual Action Alignment | Joy Future Academy, JD | [JoyAI-RA 0.5: Scaling Robot Manipulation Learning via Dual Action Alignment](https://arxiv.org/abs/2608.05674) | arXiv | [project](https://joyai-ra-05.github.io/) |
| 2026-08-05 | Egocentric Video, 3D Affordances, Robot-Free Teaching | University of Tokyo | [VLAff: Vision-Language-Affordance Model for Unified Actionable Affordances](https://arxiv.org/abs/2608.05215) | IROS 2026 | [project](https://ojh6404.github.io/) |
| 2026-08-03 | Egocentric Video, Robot-Data Synthesis, 15 Morphologies | Renmin University of China | [Ego2Robot: Scalable Robot Data Synthesis from Egocentric Human Data](https://arxiv.org/abs/2608.02580) | arXiv | [project](https://www-ye.github.io/ego2robot_blog/) |
| 2026-07-31 | Contact-Rich Teleoperation, Impedance Retargeting, Force Safety | University of Tokyo | [MDIR: A Task-Manifold Impedance Retargeting Method for Contact-Rich Teleoperation](https://arxiv.org/abs/2607.29271) | arXiv | [paper](https://arxiv.org/abs/2607.29271) |
| 2026-07-30 | Kinesthetic Arm Guidance, DexHand, Low-Setup Capture | UCLA | [DexDirect: Direct Kinesthetic Arm Guidance for Efficient Dexterous Demonstration Collection](https://arxiv.org/abs/2607.27784) | arXiv | [paper](https://arxiv.org/abs/2607.27784) |
| 2026-07-28 | High-Fidelity UMI, Stereo-Inertial SLAM, 2,000 Hours | Simple AI | [HiFi-UMI: Learning Deployable Manipulation Policies from High-Fidelity UMI Data Alone](https://arxiv.org/abs/2607.25895) | arXiv | [project](https://cloud.simpleai.tech/simple-world-lab/hifi-umi/) / [dataset](https://huggingface.co/datasets/simple-world-lab/HiFi-UMI-2K) |
| 2026-07-23 | Browser Teleoperation, Community Data Engine, Data Refinement | Axis Robotics | [AXIS: A Growable Community-Driven Data Engine for Scalable Robot Manipulation](https://arxiv.org/abs/2607.21588) | arXiv | [project](https://axisaiorg.github.io/AXIS-V1/) |
| 2026-07-22 | Human Recovery Demo, Egocentric, Corrective Intent | Fudan University | [EgoRecovery: Acquiring Failure Recovery Ability Through Human Recovery Demonstration](https://arxiv.org/abs/2607.19745) | arXiv | [paper](https://arxiv.org/abs/2607.19745) |
| 2026-07-21 | Modular Teleoperation, Bimanual Mobile, Wearable Backpack | Stanford | [ModPack: An Extensible Teleoperation Interface for Bimanual Mobile Manipulation](https://arxiv.org/abs/2607.19479) | arXiv | [project](https://modpack-robotics.github.io/) |
| 2026-07-20 | Leader-Follower, Dual-Arm, Open Hardware | University of Tokyo | [MEVION: Low-Cost Open-Source Data Collection System for Powerful and High-Speed Dual-Arm Manipulation](https://arxiv.org/abs/2607.17970) | IEEE RAP 2026 | [project](https://haraduka.github.io/mevion-hardware/) / [github](https://github.com/haraduka/mevion) |
| 2026-07-16 | VR Teleoperation, Intent Prediction, Low Latency | Georgia Tech | [AHEAD: Anticipatory Hand-Driven Teleoperation via Human Intent Prediction](https://arxiv.org/abs/2607.15172) | IROS 2026 | [paper](https://arxiv.org/abs/2607.15172) |
| 2026-07-13 | Dexterous Teleoperation, Hand-Object Co-Tracking, Sim-to-Real | Tsinghua | [Towards Human-level Dexterous Teleoperation](https://arxiv.org/abs/2607.11481) | arXiv | [project](https://bigai-dex.github.io/blog/teledexter) |
| 2026-07-10 | Single-View Human Demo, Physics Validation, Retargeting | KU Leuven | [DemoBridge: A Simulation-in-the-Loop Toolkit for Single-View Human Demonstration Retargeting](https://arxiv.org/abs/2607.09519) | arXiv | [gitlab](https://gitlab.kuleuven.be/u0123974/demo-bridge) |
| 2026-07-09 | FPV Video, Mixed Reality, Full-Hand Retargeting | Skoltech | [AgenticFocus: Object-Preserving Mixed Reality Synthesis from Human FPV Video for Dexterous Humanoid Learning](https://arxiv.org/abs/2607.08857) | arXiv | [paper](https://arxiv.org/abs/2607.08857) |
| 2026-07-07 | Digital Teleoperation, Hand-Pose Stream, World Model | DAMO Academy | [RynnWorld-Teleop: An Action-Conditioned World Model for Digital Teleoperation](https://arxiv.org/abs/2607.06558) | arXiv | [project](https://alibaba-damo-academy.github.io/RynnWorld-Teleop.github.io/) / [github](https://github.com/alibaba-damo-academy/RynnWorld-Teleop) / [model](https://huggingface.co/Alibaba-DAMO-Academy/RynnWorld-Teleop) |
| 2026-06-29 | Behavior Prompting, iPhUMI, One-Shot Demo | Stanford | [Behavior Prompting Policy: Demonstrations as Prompts for Manipulation](https://arxiv.org/abs/2606.30457) | arXiv | [project](https://behavior-prompting.github.io/) / [github](https://github.com/real-stanford/behavior_prompting) / [iPhUMI](https://github.com/real-stanford/iPhUMI) |
| 2026-06-25 | Handheld+Teleop, State-Gated Experts, Contact-Rich | RAI Institute | [Bridging Handheld and Teleoperated Supervision for Contact-Rich Manipulation via State-Gated Experts](https://arxiv.org/abs/2606.26603) | arXiv | [project](https://nperi-rai.github.io/bridge-project/) |
| 2026-06-17 | Humanoid, Active Perception, Head-Hand | SJTU | [HALOMI: Learning Humanoid Loco-Manipulation with Active Perception from Human Demonstrations](https://arxiv.org/abs/2606.18772) | arXiv | [project](https://halomi-humanoid.github.io/) |
| 2026-06-17 | Monocular Human Video, 4D Reconstruction, DexHand Retargeting | UC Berkeley | [Do as I Do: Dexterous Manipulation Data from Everyday Human Videos](https://arxiv.org/abs/2606.19333) | arXiv | [project](https://do-as-i-do.com/) / [github](https://github.com/malik-group/do-as-i-do) |
| 2026-06-16 | Internet Video, 4D Hand-Object, Any-View Retargeting | Rice University | [EgoInfinity: A Web-Scale 4D Hand-Object Interaction Data Engine for Any-View Robot Retargeting and Video-to-Action Robot Learning](https://arxiv.org/abs/2606.17385) | arXiv | [project](https://rice-robotpi-lab.github.io/EgoInfinity/) / [github](https://github.com/Rice-RobotPI-Lab/EgoInfinity) / [dataset](https://huggingface.co/datasets/Rice-RobotPI-Lab/egoinfinity) |
| 2026-06-12 | Egocentric Guidance, Data Quality, AR | SJTU | [EgoGuide: Egocentric Guidance for Efficient Robot-Free Demonstration Collection and Learning](https://arxiv.org/abs/2606.14665) | arXiv | [project](https://silicx.github.io/EgoGuide/) |
| 2026-06-10 | Egocentric Human Video, Digital Twin, Executable Actions | Georgia Tech | [EgoEngine: From Egocentric Human Videos to High-Fidelity Dexterous Robot Demonstrations](https://arxiv.org/abs/2606.12604) | arXiv / RSS 2026 Workshop | [project](https://egoengine.github.io/) |
| 2026-06-10 | Unstructured Human Video, Intent Interface, Cross-Embodiment | UIUC | [LUCID: Learning Embodiment-Agnostic Intent Models from Unstructured Human Videos for Scalable Dexterous Robot Skill Acquisition](https://arxiv.org/abs/2606.11628) | arXiv | [project](https://lucid-robot.github.io/) |
| 2026-06-08 | Finger-Aligned, Bimanual, Large-Scale | AIRoA | [YUBI: Yielding Universal Bidigital Interface for Bimanual Dexterous Manipulation at Scale](https://arxiv.org/abs/2606.10244) | arXiv / ICRA 2026 Workshop | [project](https://yubi.airoa.io/) / [hardware](https://github.com/toyota/yubi-hw) / [software](https://github.com/airoa-org/yubi-sw) |
| 2026-06-04 | Wearable DexHand, Tactile, In-Hand Vision | Peking University | [RealDexUMI: A Wearable Universal Manipulation Interface for Dexterous Robot Learning](https://arxiv.org/abs/2606.06033) | arXiv | [project](https://research.beingbeyond.com/realdexumi) |
| 2026-05-24 | Aria Egocentric Video, Robot-Data-Free, Flow Matching | University of Maryland | [HumanEgo: Zero-Shot Robot Learning from Minutes of Human Egocentric Videos](https://arxiv.org/abs/2605.24934) | arXiv | [project](https://humanego-ai.github.io/) / [github](https://github.com/TX-Leo/HumanEgo) / [dataset](https://huggingface.co/datasets/Leo-TX/HumanEgo) |
| 2026-05-20 | Mobile Manipulation, Cross-View, Robot-Free | Zhejiang University | [Mobile UMI: Cross-View Diffusion Policy with Decoupled Kinematics for Mobile Manipulation](https://arxiv.org/abs/2605.20894) | arXiv | [paper](https://arxiv.org/abs/2605.20894) |
| 2026-05-12 | Cross-Embodiment I/O, Teleoperation, Hardware-Agnostic | Carnegie Mellon University | [RIO: Flexible Real-Time Robot I/O for Cross-Embodiment Robot Learning](https://arxiv.org/abs/2605.11564) | RSS 2026 | [project](https://robot-i-o.github.io/) / [github](https://github.com/robot-i-o/rio) |
| 2026-05-05 | VR-UMI, Robot-Free, Humanoid Whole-Body | BAAI | [BifrostUMI: Bridging Robot-Free Demonstrations and Humanoid Whole-Body Manipulation](https://arxiv.org/abs/2605.03452) | arXiv | [project](https://baai-aether.github.io/BifrostUMI/) |
| 2026-04-15 | 3D Perception, LiDAR, UMI Extension | HKU | [UMI-3D: Extending Universal Manipulation Interface from Vision-Limited to 3D Spatial Perception](https://arxiv.org/abs/2604.14089) | arXiv | [project](https://umi-3d.github.io/) / [dataset](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) / [policy](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Policy) |
| 2026-04-08 | Wearable, Aria+IMU, Metric Whole-Body Motion, In-the-Wild | University of Pennsylvania | [RoSHI: A Versatile Robot-oriented Suit for Human Data In-the-Wild](https://arxiv.org/abs/2604.07331) | arXiv | [project](https://roshi-mocap.github.io/) |
| 2026-03-27 | Underwater, Robot-Free, Domain Transfer | Stanford | [UMI-Underwater: Learning Underwater Manipulation without Underwater Teleoperation](https://arxiv.org/abs/2603.27012) | arXiv | [project](https://umi-under-water.github.io/) / [github](https://github.com/umi-under-water/UMI_underwater) |
| 2026-03-17 | UMI Gripper, Demonstration Quality, Ergonomics | UMass Amherst | [Influence of Gripper Design on Human Demonstration Quality for Robot Learning](https://arxiv.org/abs/2603.17189) | ICRA 2026 | [paper](https://arxiv.org/abs/2603.17189) |
| 2026-03-10 | Portable Teleoperation, Suitcase, Plug-and-Play | UIUC | [TRIP-Bag: A Portable Teleoperation System for Plug-and-Play Robotic Arms and Leaders](https://arxiv.org/abs/2603.09226) | arXiv | [project](https://uiuckimlab.github.io/TRIP-Bag-pages/) |
| 2026-03-06 | Mobile Manipulation, Isomorphic Wearable, Active+Teleop Data | Tsinghua University | [SuperSuit: An Isomorphic Bimodal Interface for Scalable Mobile Manipulation](https://arxiv.org/abs/2603.06280) | arXiv | [paper](https://arxiv.org/abs/2603.06280) |
| 2025-11-12 | Egocentric Point Cloud, Cross-Embodiment | Tsinghua SIGS | [UMIGen: A Unified Framework for Egocentric Point Cloud Generation and Cross-Embodiment Robotic Imitation Learning](https://arxiv.org/abs/2511.09302) | arXiv | [paper](https://arxiv.org/abs/2511.09302) |
| 2025-10-31 | Egocentric, Active Vision, Whole-Body | UC Berkeley | [EgoMI: Learning Active Vision and Whole-Body Manipulation from Egocentric Human Demonstrations](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-10-02 | Active Perception, VR, Robot-Free | Shanghai University | [ActiveUMI: Robotic Manipulation with Active Perception from Robot-Free Human Demonstrations](https://arxiv.org/abs/2510.01607) | arXiv | [project](https://activeumi.github.io/) |
| 2025-09-23 | Multi-View UMI, Wrist+Third-Person, Cross-Embodiment | NYU Abu Dhabi | [MV-UMI: A Scalable Multi-View Interface for Cross-Embodiment Learning](https://arxiv.org/abs/2509.18757) | arXiv | [project](https://mv-umi.github.io/) |
| 2025-09-18 | Tactile, Robot Teaching, Single-Arm | SJTU | [exUMI: Extensible Robot Teaching System with Action-aware Task-agnostic Tactile Representation](https://silicx.github.io/exUMI/) | CoRL 2025 | [project](https://silicx.github.io/exUMI/) / [github](https://github.com/silicx/exUMI) / [paper](https://arxiv.org/abs/2509.14688) |
| 2025-07-05 | Human-Hand, Robot-Free, Policy Learning | Peking University | [RwoR: Generating Robot Demonstrations from Human Hand Collection for Policy Learning without Robot](https://arxiv.org/abs/2507.03930) | IROS 2025 | [project](https://rwor.github.io/) |
| 2025-06-11 | UMI Hardware, Continuous Demonstration Segmentation, IMU+Marker EKF, Agriculture | Eurecat | [Advances on Affordable Hardware Platforms for Human Demonstration Acquisition in Agricultural Applications](https://arxiv.org/abs/2506.09494) | ERF 2025 | [doi](https://doi.org/10.1007/978-3-031-89471-8_14) |
| 2025-04-06 | Human Tool Use, Tool-Centric Actions, Robot-Free, Cross-Embodiment | UIUC | [Tool-as-Interface: Learning Robot Policies from Observing Human Tool Use](https://arxiv.org/abs/2504.04612) | CoRL 2025 | [project](https://tool-as-interface.github.io/) |
| 2025-03-05 | Low-Cost Exoskeleton, In-the-Wild, Pseudo-Robot Demonstrations | Shanghai Jiao Tong University | [AirExo-2: Scaling up Generalizable Robotic Imitation Learning with Low-Cost Exoskeletons](https://arxiv.org/abs/2503.03081) | CoRL 2025 Oral | [project](https://airexo.tech/airexo2/) / [github](https://github.com/AirExo/AirExo-2) |
| 2025-03-02 | Human RGB-D Video, Robot-Free, Data Editing, Zero-Shot | Stanford | [Phantom: Training Robots Without Robots Using Only Human Videos](https://arxiv.org/abs/2503.00779) | arXiv | [project](https://phantom-human-videos.github.io/) |
| 2024-12-14 | Vision Pro, AR Robot Feedback, Robot-Free Data | University of Colorado Boulder | [ARMADA: Augmented Reality for Robot Manipulation and Robot-Free Data Acquisition](https://arxiv.org/abs/2412.10631) | arXiv | [page](https://machinelearning.apple.com/research/armada-augmented-reality) |
| 2024-11-06 | Handheld Grasping Tool, Cross-Embodiment, Motion-Invariant | UT Austin | [LEGATO: Cross-Embodiment Imitation Using a Grasping Tool](https://arxiv.org/abs/2411.03682) | RA-L 2025 | [project](https://ut-hcrl.github.io/LEGATO/) |
| 2024-10-31 | Egocentric, Imitation, Human-First | Georgia Tech | [EgoMimic: Scaling Imitation Learning via Egocentric Video](https://arxiv.org/abs/2410.24221) | arXiv | [project](https://egomimic.github.io/) / [github](https://github.com/SimarKareer/EgoMimic) |
| 2024-10-11 | Augmented Reality, Haptic Warnings, Cross-Embodiment | Stanford | [ARCap: Collecting High-quality Human Demonstrations for Robot Learning with Augmented Reality Feedback](https://arxiv.org/abs/2410.08464) | arXiv | [project](https://tml.stanford.edu/ARCap/) |
| 2024-07-01 | Teleoperation, Immersive, Active Visual Feedback | UC San Diego | [Open-TeleVision: Teleoperation with Immersive Active Visual Feedback](https://arxiv.org/abs/2407.01512) | CoRL 2024 | [github](https://github.com/OpenTeleVision/TeleVision) |
| 2024-04-09 | Augmented Reality, Kinesthetic Teaching, Everyday Users | University of Washington | [EVE: Enabling Anyone to Train Robots using Augmented Reality](https://arxiv.org/abs/2404.06089) | UIST 2024 | [paper](https://arxiv.org/abs/2404.06089) |
| 2024-03-12 | Teleoperation, VR, Bimanual | NYU | [OPEN TEACH: A Versatile Teleoperation System for Robotic Manipulation](https://arxiv.org/abs/2403.07870) | arXiv | [github](https://github.com/aadhithya14/Open-Teach) |
| 2024-02-15 | Handheld Interface, Bimanual, Portable | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) / [github](https://github.com/real-stanford/universal_manipulation_interface) |

### Dexterous Hand / DexHand

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-25 | Fiber-Optic Glove, 60 Hz Full-Hand Pose, Occlusion-Free, Bimanual Virtual Teleoperation | Meta | [Fiber Optic Sensing Glove for High Performance Dexterous Manipulation Capture](https://arxiv.org/abs/2608.24572) | arXiv | [paper](https://arxiv.org/abs/2608.24572) |
| 2026-08-14 | Human+Robot Demonstrations, Joint-Aligned Actions, 15 Finger Joints, Cross-Embodiment | Zhejiang University | [AdvDex: Learning Dexterous Manipulation from Human Demonstrations via Joint-Aligned Actions and Adversarial Learning](https://arxiv.org/abs/2608.14028) | arXiv | [paper](https://arxiv.org/html/2608.14028) |
| 2026-08-07 | Monocular Human Video, Contact-Consistent Retargeting, DexHand | Nanjing University | [C2Dex: Contact-Consistent Reconstruction and Retargeting for Dexterous Manipulation from Monocular Video](https://arxiv.org/abs/2608.07045) | arXiv | [project](https://k-jie.github.io/C2Dex/) / [github](https://github.com/K-Jie/C2Dex_code) |
| 2026-08-04 | Egocentric Video Mining, VLA Post-Training, Cross-Embodiment | University of Tokyo | [SiMDex: Mining Similar Egocentric Videos for Cross-Embodiment Dexterous Manipulation](https://arxiv.org/abs/2608.04196) | arXiv | [project](https://lin-nie.github.io/SiMDex/) |
| 2026-07-30 | Kinesthetic Arm Guidance, Webcam Retargeting, 13-DoF Hand | UCLA | [DexDirect: Direct Kinesthetic Arm Guidance for Efficient Dexterous Demonstration Collection](https://arxiv.org/abs/2607.27784) | arXiv | [paper](https://arxiv.org/abs/2607.27784) |
| 2026-07-17 | Reconfigurable Hardware, DexHand+Humanoid, Teleoperation | UNC Chapel Hill | [Handroid: Bridging Dexterous Hand and Humanoid](https://arxiv.org/abs/2607.16187) | arXiv | [project](https://handroid.org/) |
| 2026-07-13 | Hand-Object Co-Tracking, In-Hand Dexterity, Teleoperation | Tsinghua | [Towards Human-level Dexterous Teleoperation](https://arxiv.org/abs/2607.11481) | arXiv | [project](https://bigai-dex.github.io/blog/teledexter) |
| 2026-07-09 | Calibration-Free, Hand Retargeting, Teleoperation | Noematrix | [AnyDexRT: Calibration-Free Dexterous Hand Retargeting with Few-Shot Human Guidance](https://arxiv.org/abs/2607.08341) | arXiv / RSS 2026 Workshop | [project](https://chenxi-wang.github.io/projects/anydexrt/) |
| 2026-07-08 | Low-Jitter Retargeting, Real-Time, User Study | ETH Zurich | [Smooth Operator: A Real-Time Sampling-Based Algorithm for Kinematic Hand Retargeting](https://arxiv.org/abs/2607.07491) | arXiv | [project](https://mimicrobotics.github.io/smooth-operator/) |
| 2026-06-17 | Human Video, Robot-Complete Actions, DexHand | UC Berkeley | [Do as I Do: Dexterous Manipulation Data from Everyday Human Videos](https://arxiv.org/abs/2606.19333) | arXiv | [project](https://do-as-i-do.com/) / [github](https://github.com/malik-group/do-as-i-do) |
| 2026-06-10 | Egocentric Video, Digital Twin, Zero-Shot Policy | Georgia Tech | [EgoEngine: From Egocentric Human Videos to High-Fidelity Dexterous Robot Demonstrations](https://arxiv.org/abs/2606.12604) | arXiv / RSS 2026 Workshop | [project](https://egoengine.github.io/) |
| 2026-06-08 | Bidigital Gripper, Bimanual, DexHand | AIRoA | [YUBI: Yielding Universal Bidigital Interface for Bimanual Dexterous Manipulation at Scale](https://arxiv.org/abs/2606.10244) | arXiv / ICRA 2026 Workshop | [project](https://yubi.airoa.io/) / [hardware](https://github.com/toyota/yubi-hw) / [software](https://github.com/airoa-org/yubi-sw) |
| 2026-06-04 | Wearable DexHand, Tactile, Cross-Embodiment | Peking University | [RealDexUMI: A Wearable Universal Manipulation Interface for Dexterous Robot Learning](https://arxiv.org/abs/2606.06033) | arXiv | [project](https://research.beingbeyond.com/realdexumi) |
| 2026-04-16 | Handheld Interface, Calibration-Free, Force Feedback, Under $150 | Sogang University | [DEX-Mouse: A Low-cost Portable and Universal Interface with Force Feedback for Data Collection of Dexterous Robotic Hands](https://arxiv.org/abs/2604.15013) | arXiv | [project](https://dex-mouse.github.io/) |
| 2026-04-14 | DexHand, Interface, Data Quality | X Square Robot | [XRZero-G0: Pushing the Frontier of Dexterous Robotic Manipulation with Interfaces, Quality and Ratios](https://arxiv.org/abs/2604.13001) | arXiv | [github](https://github.com/X-Square-Robot/XRZero-G0) |
| 2026-03-18 | Wearable Exoskeleton, Operator-Agnostic, Visual-Kinematic Alignment | UCLA | [DexEXO: A Wearability-First Dexterous Exoskeleton for Operator-Agnostic Demonstration and Learning](https://arxiv.org/abs/2603.17323) | IROS 2026 | [project](https://dexexo-research.github.io/) |
| 2026-03-17 | Phone-Based, 6-DoF Wrist+21-DoF Hand, Open Source | UCLA | [TeleDex: Accessible Dexterous Teleoperation](https://arxiv.org/abs/2603.17065) | IROS 2026 | [project](https://orayyan.com/teledex) / [pypi](https://pypi.org/project/teledex/) |
| 2026-01-08 | Bimanual DexHand, Unified Teleoperation, Cross-Platform | University of Hong Kong | [UniBiDex: A Unified Teleoperation Framework for Robotic Bimanual Dexterous Manipulation](https://arxiv.org/abs/2601.04629) | arXiv | [paper](https://arxiv.org/abs/2601.04629) |
| 2025-11-29 | Mechanically Isomorphic Exoskeleton, Retargeting-Free, Visuotactile | Shanghai Jiao Tong University | [MILE: A Mechanically Isomorphic Hand Exoskeleton and Visuotactile Robotic Hand for Data Collection in Dexterous Manipulation](https://arxiv.org/abs/2512.00324) | arXiv | [project](https://sites.google.com/view/mile-system/home) |
| 2025-06-13 | Sensorized Exoskeleton, Dexterous Policy, In-the-Wild | Carnegie Mellon University | [ExoStart: Efficient Learning for Dexterous Manipulation with Sensorized Exoskeleton Demonstrations](https://arxiv.org/abs/2506.11775) | arXiv | [project](https://sites.google.com/view/exostart/) |
| 2025-06-05 | Low-Cost DexHand, Exoskeleton Glove, Open Hardware | Independent Researcher | [GEX: Democratizing Dexterity with Fully-Actuated Dexterous Hand and Exoskeleton Glove](https://arxiv.org/abs/2506.04982) | arXiv | [paper](https://arxiv.org/abs/2506.04982) |
| 2025-05-28 | DexHand, Wearable, Cross-Hand | Stanford | [DexUMI: Using Human Hand as the Universal Manipulation Interface for Dexterous Manipulation](https://arxiv.org/abs/2505.21864) | CoRL 2025 | [data](https://umi-data.github.io/) |
| 2025-05-12 | DexHand, In-the-Wild, Human-to-Robot | CMU | [DexWild](https://dexwild.github.io/) | RSS 2025 | [project](https://dexwild.github.io/) |
| 2024-03-12 | DexHand, Mocap, Data Collection | Stanford | [DexCap: Scalable and Portable Mocap Data Collection System for Dexterous Manipulation](https://arxiv.org/abs/2403.07788) | arXiv | [github](https://github.com/j96w/DexCap) |

### Multimodal / Force / Tactile

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-21 | Human Visual-Tactile Demonstrations, Mass+Friction+Stiffness, Matched Actions, Adaptive Grasping | Xiaomi Robotics | [ViTacPhys: Physical Property-Aware Grasping from Human Visual-Tactile Demonstrations](https://arxiv.org/abs/2608.21355) | arXiv | [project](https://vitacphys.github.io/ViTacPhys/) |
| 2026-08-16 | Human Motion+Force, Online Teleoperation, Offline Translation, Force-Aware Retargeting | UC San Diego | [ReForce: Learning Force-aware Retargeting for Dexterous Manipulation](https://arxiv.org/abs/2608.15560) | arXiv | [project](https://wuyuhang-eai.github.io/reforce/) |
| 2026-08-15 | Egocentric Vision-to-Touch, 5.7M Pairs, Force+Contact Supervision | Shanghai Qi Zhi Institute | [EgoTac: In-the-wild Tactile Prediction from Egocentric Vision](https://arxiv.org/abs/2608.15060) | arXiv | [paper](https://arxiv.org/html/2608.15060) |
| 2026-08-03 | Wearable Dual-Arm, Isomorphic Transfer, Body-Surface Tactile | AIST | [TWINS: A Tactile Wearable Isomorphic Arm Networked System for Contact-Rich Manipulation Learning](https://arxiv.org/abs/2608.01733) | arXiv | [project](https://mmurooka.github.io/twins-project-page/) |
| 2026-07-31 | Wearable Fingertip Tactile, Human-to-Robot Replay, Contact Depth | Chinese Academy of Sciences | [TacPrint: A Wearable Fingertip Tactile Sensor for Human-to-Robot Contact Reproduction](https://arxiv.org/abs/2607.29231) | arXiv | [paper](https://arxiv.org/abs/2607.29231) |
| 2026-07-20 | Force Memory, VLA, Contact History | Tsinghua | [FM-VLA: Force-based Memory for Vision-Language-Action Models in Contact-Rich Manipulation](https://arxiv.org/abs/2607.18231) | arXiv | [project](https://qft-333.github.io/FM-VLA-Page/) |
| 2026-07-19 | Asynchronous Vision+Force, Diffusion Policy, Latency | SJTU | [Asynchronous Multimodal Diffusion Policy Composition via Latency-Aware Guidance Fusion](https://arxiv.org/abs/2607.17257) | arXiv | [project](https://lag-fusion.github.io/) |
| 2026-07-16 | Tactile Grounding, VLA, Future Contact | Fudan University | [Representation-Aligned Tactile Grounding for Contact-Rich Robotic Manipulation](https://arxiv.org/abs/2607.14609) | arXiv | [paper](https://arxiv.org/abs/2607.14609) |
| 2026-06-24 | Wrist-Worn sEMG, Per-Finger Force, Robot-Free | Amazon FAR | [ForceBand: Learning Forceful Manipulation with sEMG](https://arxiv.org/abs/2606.26093) | arXiv | [project](https://forceband-emg.github.io/) |
| 2026-06-15 | Tactile Glove, 22-DoF, 2048 Taxels | Carnegie Mellon University | [ART-Glove: Articulated Tactile Glove for Contact-Grounded Dexterous Interaction Capture](https://arxiv.org/abs/2606.16370) | arXiv | [project](https://linchangyi1.github.io/ART-Glove/) |
| 2026-06-11 | Whole-Body Tactile, Force-Supervised, Humanoid | Georgia Tech | [WT-UMI: Tactile-based Whole-Body Manipulation via Force-Supervised Contact-Aware Planning](https://arxiv.org/abs/2606.13232) | arXiv | [project](https://wt-umi.github.io/WTUMI/) |
| 2026-06-08 | Arm-Worn, Force, Vision-Tactile | SJTU | [AetheRock: An Arm-Worn Robot Teaching System for Force-Guided Vision-Tactile Learning](https://arxiv.org/abs/2606.09777) | arXiv | [paper](https://arxiv.org/abs/2606.09777) |
| 2026-04-12 | Multimodal, Tactile, Force/Wrench | BAAI | [OmniUMI: Towards Physically Grounded Robot Learning via Human-Aligned Multimodal Interaction](https://arxiv.org/abs/2604.10647) | arXiv | [paper](https://arxiv.org/abs/2604.10647) |
| 2026-04-08 | Visuo-Tactile, Closed-Loop, Bimanual | Fudan University | [TAMEn: Tactile-Aware Manipulation Engine for Closed-Loop Data Collection in Contact-Rich Tasks](https://arxiv.org/abs/2604.07335) | arXiv | [project](https://opendrivelab.com/TAMEn) / [github](https://github.com/OpenDriveLab/TAMEn) / [dataset](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) |
| 2026-03-18 | Human-Centric, Vision+Tactile+Kinematics, 2,400 Demos | Huazhong University of Science and Technology | [DexViTac: Collecting Human Visuo-Tactile-Kinematic Demonstrations for Contact-Rich Dexterous Manipulation](https://arxiv.org/abs/2603.17851) | arXiv | [project](https://xitong-c.github.io/DexViTac/) |
| 2026-01-21 | Tactile, Force/Torque, Contact-Rich | TU Munich | [TacUMI: A Multi-Modal Universal Manipulation Interface for Contact-Rich Tasks](https://arxiv.org/abs/2601.14550) | arXiv | [github](https://github.com/Tac-UMI/TacUMI) |
| 2026-01-15 | Force, Compliance, Contact-Rich | Stanford | [In-the-Wild Compliant Manipulation with UMI-FT](https://arxiv.org/abs/2601.09988) | ICRA 2026 | [github](https://github.com/real-stanford/UMI-FT) |
| 2025-12-18 | Full-Hand Touch, Egocentric, Video+Touch+Pose, In-the-Wild | MIT | [OpenTouch: Bringing Full-Hand Touch to Real-World Interaction](https://arxiv.org/abs/2512.16842) | arXiv | [project](https://opentouch-tactile.github.io/) |
| 2025-12-10 | Tactile, Visuo-Tactile, TacThru-UMI | Peking University | [TacThru: Simultaneous Tactile-Visual Perception for Learning Multimodal Robot Manipulation](https://arxiv.org/abs/2512.09851) | RA-L | [github](https://github.com/YuyangLee/TacThru) |
| 2025-12-09 | Open Tactile Glove, 12 Three-Axis Sensors, Human-to-Robot | Meta FAIR | [OSMO: Open-Source Tactile Glove for Human-to-Robot Skill Transfer](https://arxiv.org/abs/2512.08920) | arXiv | [project](https://www.jessicayin.com/osmo_tactile_glove/) |
| 2025-12-04 | Force-Grounded, Cross-View, UMI Gripper, Articulated Objects | ETH Zurich | [Hoi! - A Multimodal Dataset for Force-Grounded, Cross-View Articulated Manipulation](https://arxiv.org/abs/2512.04884) | CVPR 2026 | [project](https://hoi-dataset.ethz.ch/index.html) |
| 2025-11-29 | Isomorphic Exoskeleton, RGB-D, Fingertip Visuotactile | Shanghai Jiao Tong University | [MILE: A Mechanically Isomorphic Hand Exoskeleton and Visuotactile Robotic Hand for Data Collection in Dexterous Manipulation](https://arxiv.org/abs/2512.00324) | arXiv | [project](https://sites.google.com/view/mile-system/home) |
| 2025-11-08 | Vision+Tactile, Fine Manipulation | Tsinghua | [ViTaMIn-B](https://chuanyune.github.io/ViTaMIn-B_page/) | arXiv | [project](https://chuanyune.github.io/ViTaMIn-B_page/) / [paper](https://arxiv.org/abs/2511.05858) |
| 2025-09-23 | Force-Guided, Wrist F/T, Contact-Rich | GIST | [ManipForce](https://sites.google.com/view/manipforce/) | ICRA 2026 | [project](https://sites.google.com/view/manipforce/) / [github](https://github.com/gist-ailab/ManipForce) |
| 2025-06-02 | Robot-Free, Visuo-Tactile, Wearable | Shanghai Innovation Institute | [FreeTacMan: Robot-free Visuo-Tactile Data Collection System for Contact-rich Manipulation](https://arxiv.org/abs/2506.01941) | ICRA 2026 | [project](https://opendrivelab.com/FreeTacMan) / [github](https://github.com/OpenDriveLab/FreeTacMan) |
| 2025-04-08 | Robot-Free, Visuo-Tactile, Contact-Rich | Tsinghua | [ViTaMIn: Learning Contact-Rich Tasks Through Robot-Free Visuo-Tactile Manipulation Interface](https://arxiv.org/abs/2504.06156) | arXiv | [project](https://chuanyune.github.io/ViTaMIn_page/) |
| 2024-10-10 | Robot-Free Force-Motion Capture, Hybrid Force-Position Control | Shanghai Jiao Tong University | [ForceMimic: Force-Centric Imitation Learning with Force-Motion Capture System for Contact-Rich Manipulation](https://arxiv.org/abs/2410.07554) | ICRA 2025 | [project](https://forcemimic.github.io/) / [github](https://github.com/ForceMimic) |

### In-the-Wild / Mobile / Whole-Body

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-21 | Bimanual Mobile, Active Perception, Haptic Feedback | Stanford | [ModPack: An Extensible Teleoperation Interface for Bimanual Mobile Manipulation](https://arxiv.org/abs/2607.19479) | arXiv | [project](https://modpack-robotics.github.io/) |
| 2026-06-17 | Humanoid, Loco-Manipulation, Active Perception | SJTU | [HALOMI: Learning Humanoid Loco-Manipulation with Active Perception from Human Demonstrations](https://arxiv.org/abs/2606.18772) | arXiv | [project](https://halomi-humanoid.github.io/) |
| 2026-06-11 | Whole-Body, Tactile, Humanoid | Georgia Tech | [WT-UMI: Tactile-based Whole-Body Manipulation via Force-Supervised Contact-Aware Planning](https://arxiv.org/abs/2606.13232) | arXiv | [project](https://wt-umi.github.io/WTUMI/) |
| 2026-05-20 | Mobile Manipulation, Cross-View, Decoupled Kinematics | Zhejiang University | [Mobile UMI: Cross-View Diffusion Policy with Decoupled Kinematics for Mobile Manipulation](https://arxiv.org/abs/2605.20894) | arXiv | [paper](https://arxiv.org/abs/2605.20894) |
| 2026-05-05 | Humanoid, Whole-Body, Robot-Free VR-UMI | BAAI | [BifrostUMI: Bridging Robot-Free Demonstrations and Humanoid Whole-Body Manipulation](https://arxiv.org/abs/2605.03452) | arXiv | [project](https://baai-aether.github.io/BifrostUMI/) |
| 2026-04-08 | Wearable Whole-Body Capture, Aria+9 IMUs, Metric Root | University of Pennsylvania | [RoSHI: A Versatile Robot-oriented Suit for Human Data In-the-Wild](https://arxiv.org/abs/2604.07331) | arXiv | [project](https://roshi-mocap.github.io/) |
| 2026-03-06 | Mobile Manipulation, Isomorphic Wearable, Joint-Space Data | Tsinghua University | [SuperSuit: An Isomorphic Bimodal Interface for Scalable Mobile Manipulation](https://arxiv.org/abs/2603.06280) | arXiv | [paper](https://arxiv.org/abs/2603.06280) |
| 2026-03-03 | Whole-Body, Egocentric, Mobile Manipulation | Stanford | [HoMMI: Learning Whole-Body Mobile Manipulation from Human Demonstrations](https://arxiv.org/abs/2603.03243) | arXiv | [paper](https://arxiv.org/abs/2603.03243) |
| 2026-02-06 | Humanoid, Whole-Body, Bimanual | Tsinghua | [HuMI](https://humanoid-manipulation-interface.github.io/) | arXiv / Dataset | [project](https://humanoid-manipulation-interface.github.io/) / [paper](https://arxiv.org/abs/2602.06643) |
| 2025-10-31 | Egocentric, Active Head, Semi-Humanoid | UC Berkeley | [EgoMI: Learning Active Vision and Whole-Body Manipulation from Egocentric Human Demonstrations](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-10-02 | In-the-Wild, Active Perception, Bimanual | Shanghai University | [ActiveUMI: Robotic Manipulation with Active Perception from Robot-Free Human Demonstrations](https://arxiv.org/abs/2510.01607) | arXiv | [project](https://activeumi.github.io/) |
| 2025-10-02 | Aerial Manipulation, Embodiment-Aware Guidance | CMU | [UMI-on-Air: Embodiment-Aware Guidance for Embodiment-Agnostic Visuomotor Policies](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2024-07-14 | Mobile Manipulation, Whole-Body, Legged | Stanford | [UMI on Legs: Making Manipulation Policies Mobile with a Manipulation-Centric Whole-body Controller](https://arxiv.org/abs/2407.10353) | CoRL 2024 | [github](https://github.com/real-stanford/umi-on-legs) |
| 2024-06-27 | Audio-Visual, In-the-Wild, Real-World | Stanford | [ManiWAV: Learning Robot Manipulation from In-the-Wild Audio-Visual Data](https://arxiv.org/abs/2406.19464) | CoRL 2024 | [project](https://real.stanford.edu/maniwav) / [github](https://github.com/real-stanford/maniwav) |
| 2024-02-15 | In-the-Wild, Hardware-Agnostic, Long-Horizon | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) |

## UMI Dataset

Dataset families for UMI-native collection and strong adjacent manipulation settings that help train or evaluate UMI-style systems.

### Official / Core Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2024-02-15 | UMI, Bimanual, Zarr, MP4 | Stanford | [UMI Dataset Family](https://umi-data.github.io/) | Dataset | [project](https://umi-gripper.github.io/) / [data](https://umi-data.github.io/) |

### UMI-native Dataset Families

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-28 | Bimanual, 2,000 Hours, 6 Views, LeRobot v3 | Simple AI | [HiFi-UMI-2K](https://huggingface.co/datasets/simple-world-lab/HiFi-UMI-2K) | Dataset / arXiv | [paper](https://arxiv.org/abs/2607.25895) / [project](https://cloud.simpleai.tech/simple-world-lab/hifi-umi/) |
| 2026-06-29 | iPhUMI, Bimanual, iPhone, One-Shot Prompts | Stanford | [Behavior Prompting Policy: Demonstrations as Prompts for Manipulation](https://arxiv.org/abs/2606.30457) | Dataset / arXiv | [project](https://behavior-prompting.github.io/) / [github](https://github.com/real-stanford/iPhUMI) / [laundry](https://huggingface.co/datasets/austinpatel/iphumi_bimanual_laundry_folding) / [drawing](https://huggingface.co/datasets/austinpatel/iphumi_drawinganything_real) |
| 2026-06-12 | Bimanual, 2K+ Hours, Lance/LeRobot | Tencent Robotics X | [Hy-Embodied-0.5-VLA-Data](https://huggingface.co/datasets/tencent/Hy-Embodied-0.5-VLA-Data) | Dataset / VLA | [paper](https://arxiv.org/abs/2606.14409) / [github](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) / [model](https://huggingface.co/tencent/Hy-Embodied-0.5-VLA-UMI) |
| 2026-06-09 | Benchmark, 10 Tasks, HuggingFace | Soochow University | [UMI-Bench 1.0](https://umibenchmark.github.io/) | Dataset / Benchmark | [paper](https://arxiv.org/abs/2606.10382) / [dataset](https://huggingface.co/datasets/UMIbenchmark/UMI-Benchmark-v1) / [models](https://huggingface.co/UMIbenchmark/UMI-Benchmark-v1-checkpoints) |
| 2026-06-08 | Bimanual, 1.20M Episodes, LeRobot | AIRoA | [YUBI](https://yubi.airoa.io/) | Dataset | [paper](https://arxiv.org/abs/2606.10244) / [project](https://yubi.airoa.io/) / [software](https://github.com/airoa-org/yubi-sw) |
| 2026-06-03 | UMI-VQA, Fisheye, Validated Trajectories | TeleAI | [VISTA](https://tele-umi-vista.github.io/) | Dataset / VLA | [paper](https://arxiv.org/abs/2606.04708) / [github](https://github.com/TeleHuman/umi-vista) / [dataset](https://huggingface.co/collections/TeleEmbodied/vista) |
| 2026-04-15 | 3D Perception, LiDAR, UMI Extension | HKU | [UMI-3D](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) | Dataset | [paper](https://arxiv.org/abs/2604.14089) / [project](https://umi-3d.github.io/) / [dataset](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) |
| 2026-04-08 | Visuo-Tactile, MP4/CSV, Recovery Data | Fudan University | [TAMEn](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) | Dataset | [paper](https://arxiv.org/abs/2604.07335) / [project](https://opendrivelab.com/TAMEn) / [github](https://github.com/OpenDriveLab/TAMEn) |
| 2026-02-06 | Humanoid, Bimanual, Whole-Body | Tsinghua | [HuMI](https://humanoid-manipulation-interface.github.io/) | Dataset | [project](https://humanoid-manipulation-interface.github.io/) / [paper](https://arxiv.org/abs/2602.06643) |
| 2025-12-31 | 789,772 Demos, Bimanual, Image+Proprio+Tactile | GenRobot | [GenRobot 10Kh-RealOmin OpenData](https://huggingface.co/datasets/genrobot2025/10Kh-RealOmin-OpenData) | Dataset | [page](https://www.genrobot.ai/) / [index](https://umi-data.github.io/) |
| 2025-11-08 | Vision, Tactile, Parallel Gripper | Tsinghua | [ViTaMIn-B](https://chuanyune.github.io/ViTaMIn-B_page/) | Dataset | [project](https://chuanyune.github.io/ViTaMIn-B_page/) / [paper](https://arxiv.org/abs/2511.05858) |
| 2025-10-09 | Large-Scale, Household, LeRobot | Shanghai AI Lab | [FastUMI-100K](https://github.com/MrKeee/FastUMI-100K) | Dataset | [github](https://github.com/MrKeee/FastUMI-100K) |
| 2025-09-23 | Multi-View, Segmentation, Placement | NYU Abu Dhabi | [MV-UMI](https://arxiv.org/abs/2509.18757) | Dataset / arXiv | [project](https://mv-umi.github.io/) |
| 2025-09-18 | exUMI, Single-Arm, Tactile | SJTU | [exUMI](https://silicx.github.io/exUMI/) | Dataset | [project](https://silicx.github.io/exUMI/) |
| 2025-07-20 | In-the-Wild, Tactile, Proprio | Columbia | [Touch in the Wild](https://binghao-huang.github.io/touch_in_the_wild/) | Dataset | [project](https://binghao-huang.github.io/touch_in_the_wild/) |
| 2025-05-28 | DexHand, Force/Torque, Inspire/XHand | Stanford | [DexUMI](https://umi-data.github.io/) | Dataset | [data](https://umi-data.github.io/) |
| 2025-05-12 | DexHand, In-the-Wild, Human-to-Robot | CMU | [DexWild](https://dexwild.github.io/) | Dataset | [project](https://dexwild.github.io/) |
| 2025-04-08 | Vision, Tactile, Precision Tasks | Tsinghua | [ViTaMIn](https://chuanyune.github.io/ViTaMIn_page/) | Dataset | [project](https://chuanyune.github.io/ViTaMIn_page/) |
| 2024-11-06 | Sim2Real, HDF5, Manipulation | UT Austin | [LEGATO](https://ut-hcrl.github.io/LEGATO/) | Dataset | [project](https://ut-hcrl.github.io/LEGATO/) |
| 2024-10-24 | Scaling Laws, Zarr, MP4 | Tsinghua | [Data Scaling Laws](https://data-scaling-laws.github.io/) | Dataset | [project](https://data-scaling-laws.github.io/) |
| 2024-09-29 | 10K+ Demos, 22 Tasks, HDF5, Hardware-Independent | Shanghai AI Lab | [FastUMI](https://arxiv.org/abs/2409.19499) | Dataset / arXiv | [project](https://fastumi.com/) / [data](https://huggingface.co/datasets/IPEC-COMMUNITY/FastUMI-Data) / [github](https://github.com/YdingTeam/FastUMI_Data) |
| 2024-06-27 | Audio, In-the-Wild, Manipulation | Stanford | [ManiWAV](https://mani-wav.github.io/) | Dataset | [project](https://mani-wav.github.io/) |

### Cross-Embodiment / Large-Scale Adjacent Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-23 | IG-10K, 20K+ Human-Robot Pairs, 50+ Tasks, Intent-Level Imitation | The University of Hong Kong | [The Imitator Game: Benchmarking Robot Imitative Ability Beyond Action Prediction](https://arxiv.org/abs/2608.22301) | Dataset / Benchmark | [project](https://imitator-game.github.io/) / [github](https://github.com/imitator-game/The-Imitator-Game) / [data](https://imitator-game.github.io/data.html) |
| 2026-08-23 | EMPIRE-651K, Bimanual Hand Motion, 111 Tasks, Per-Hand Manipulation Plans | Institute of Computing Technology, CAS | [EMPIRE: Explicit Manipulation Planning as a Learnable Intermediate Representation for Egocentric Hand-Motion Forecasting](https://arxiv.org/abs/2608.22449) | Dataset / arXiv | [github](https://github.com/wangwen-banban/EMPIRE) |
| 2026-08-17 | 600+ Hours, Optical MoCap, Sub-Millimeter, Object Interaction | National University of Singapore | [HiPHI: A Large-Scale Benchmark for High-Precision Human Motion and Object-Interaction](https://arxiv.org/abs/2608.16222) | Dataset / Benchmark | [paper](https://arxiv.org/abs/2608.16222) |
| 2026-08-12 | 200M Editing Pairs, 26 URDFs, Human-to-Robot Hand Editing | Inspire Robots / SJTU | [HandEdit: A Unified Benchmark for Egocentric Human-to-Robot Dexterous Hand Image Editing](https://arxiv.org/abs/2608.12122) | Dataset / Benchmark | [project](https://handedit.github.io/) |
| 2026-08-08 | 550 Hours, Stereo Video+IMU, Hand Detections, Open Hardware | FPV Labs | [Ego-OSCAR: Egocentric Open source Stereo CAptuRe System](https://arxiv.org/abs/2608.08285) | Dataset / arXiv | [paper](https://arxiv.org/abs/2608.08285) |
| 2026-08-05 | EgoAffordance, 204K Episodes, 3D Grasp/Trajectory Affordances | University of Tokyo | [VLAff: Vision-Language-Affordance Model for Unified Actionable Affordances](https://arxiv.org/abs/2608.05215) | IROS 2026 / Dataset | [project](https://ojh6404.github.io/) |
| 2026-07-27 | Embodied Data Taxonomy, UMI, Data Scaling | Peking University | [Data Pyramid for Embodied Manipulation](https://arxiv.org/abs/2607.24744) | arXiv | [paper](https://arxiv.org/abs/2607.24744) |
| 2026-07-23 | Community Teleoperation, 50K+ Trajectories, 207 Tasks | Axis Robotics | [AXIS: A Growable Community-Driven Data Engine for Scalable Robot Manipulation](https://arxiv.org/abs/2607.21588) | Dataset / arXiv | [project](https://axisaiorg.github.io/AXIS-V1/) |
| 2026-07-15 | Egocentric Human Video, 2,000 Hours, Retargeting Toolchain | Ant Group | [Open-AoE: An Open Egocentric Manipulation Dataset and Toolchain for Embodied Learning](https://arxiv.org/abs/2607.14183) | arXiv | [github](https://github.com/ant-research/Open-AoE) / [dataset](https://huggingface.co/datasets/inclusionAI/OpenAoE-2000h) |
| 2026-06-16 | 4D Hand-Object, Action100M, Four Robot Embodiments | Rice University | [EgoInfinity](https://arxiv.org/abs/2606.17385) | Dataset / arXiv | [project](https://rice-robotpi-lab.github.io/EgoInfinity/) / [github](https://github.com/Rice-RobotPI-Lab/EgoInfinity) / [dataset](https://huggingface.co/datasets/Rice-RobotPI-Lab/egoinfinity) |
| 2026-05-24 | Aria, 122 Recordings, Raw+MPS Annotations | University of Maryland | [HumanEgo](https://arxiv.org/abs/2605.24934) | Dataset / arXiv | [project](https://humanego-ai.github.io/) / [github](https://github.com/TX-Leo/HumanEgo) / [dataset](https://huggingface.co/datasets/Leo-TX/HumanEgo) |
| 2026-04-26 | Egocentric Human Tasks, Head-Mounted, Multimodal | Joy Future Academy, JD | [EgoLive: A Large-Scale Egocentric Dataset from Real-World Human Tasks](https://arxiv.org/abs/2604.23570) | Dataset / arXiv | [paper](https://arxiv.org/abs/2604.23570) |
| 2026-04-08 | Full-Body Pose, Egocentric RGB, 9 IMUs, Metric Root | University of Pennsylvania | [RoSHI: A Versatile Robot-oriented Suit for Human Data In-the-Wild](https://arxiv.org/abs/2604.07331) | Dataset / arXiv | [project](https://roshi-mocap.github.io/) |
| 2024-03-19 | In-the-Wild, Large-Scale, Multi-Robot | Stanford | [DROID: A Large-Scale In-The-Wild Robot Manipulation Dataset](https://arxiv.org/abs/2403.12945) | arXiv | [project](https://droid-dataset.github.io/) |
| 2023-10-26 | Scalable Data Generation, Simulation, Demonstrations | NVIDIA | [MimicGen: A Data Generation System for Scalable Robot Learning using Human Demonstrations](https://arxiv.org/abs/2310.17596) | CoRL 2023 | [project](https://mimicgen.github.io/) / [github](https://github.com/NVlabs/mimicgen_environments) |
| 2023-10-13 | Cross-Embodiment, RT-X, Multi-Dataset | Stanford | [Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864) | arXiv | [project](https://robotics-transformer-x.github.io/) / [github](https://github.com/google-deepmind/open_x_embodiment) |
| 2023-08-24 | Large-Scale, Real-Robot, Multi-Task | Berkeley | [BridgeData V2: A Dataset for Robot Learning at Scale](https://arxiv.org/abs/2308.12952) | CoRL 2023 | [project](https://rail-berkeley.github.io/bridgedata/) / [github](https://github.com/rail-berkeley/bridge_data_v2) |
| 2023-07-02 | One-Shot, Diverse Skills, Real-Robot | Tsinghua | [RH20T: A Comprehensive Robotic Dataset for Learning Diverse Skills in One-Shot](https://arxiv.org/abs/2307.00595) | ICRA 2024 | [project](https://rh20t.github.io/) / [github](https://github.com/rh20t/rh20t_api) |

### Dexterous / Hand-centric Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-10 | Whole-Hand Tactile, Human-to-Robot, Single+Bimanual | Authors | [TactiDex](https://arxiv.org/abs/2607.09190) | Dataset / Benchmark | [project](https://tactidex.github.io/) |
| 2026-06-08 | Bimanual, Bidigital, LeRobot | AIRoA | [YUBI](https://yubi.airoa.io/) | Dataset | [paper](https://arxiv.org/abs/2606.10244) / [project](https://yubi.airoa.io/) / [hardware](https://github.com/toyota/yubi-hw) |
| 2026-03-18 | 2,400 Demos, Vision+Tactile+Kinematics, In-the-Wild | Huazhong University of Science and Technology | [DexViTac](https://arxiv.org/abs/2603.17851) | Dataset / arXiv | [project](https://xitong-c.github.io/DexViTac/) |
| 2025-11-29 | RGB-D, Four Fingertip Tactile Streams, Exoskeleton Actions | Shanghai Jiao Tong University | [MILE](https://arxiv.org/abs/2512.00324) | Dataset / arXiv | [project](https://sites.google.com/view/mile-system/home) |
| 2025-05-28 | DexHand, Force/Torque, Inspire/XHand | Stanford | [DexUMI](https://umi-data.github.io/) | Dataset | [data](https://umi-data.github.io/) |
| 2025-05-12 | DexHand, Human/Robot, In-the-Wild | CMU | [DexWild](https://dexwild.github.io/) | Dataset | [project](https://dexwild.github.io/) |

### Multimodal / Force-aware Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-15 | Tactile-Reactive, 100 Hours, 12 Tasks | Authors | [T-Rex](https://arxiv.org/abs/2606.17055) | Dataset / arXiv | [project](https://tactile-rex.github.io/) |
| 2026-04-15 | LiDAR, 3D Perception, Raw Recordings | HKU | [UMI-3D](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) | Dataset | [paper](https://arxiv.org/abs/2604.14089) / [project](https://umi-3d.github.io/) / [dataset](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) |
| 2026-04-08 | Visuo-Tactile, 4 Views, Trajectories | Fudan University | [TAMEn](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) | Dataset | [paper](https://arxiv.org/abs/2604.07335) / [project](https://opendrivelab.com/TAMEn) / [github](https://github.com/OpenDriveLab/TAMEn) |
| 2026-03-18 | Vision, Dense Tactile, EE Pose, Hand Kinematics | Huazhong University of Science and Technology | [DexViTac](https://arxiv.org/abs/2603.17851) | Dataset / arXiv | [project](https://xitong-c.github.io/DexViTac/) |
| 2025-12-18 | Egocentric Video+Full-Hand Touch+Pose, 2,900 Curated Clips | MIT | [OpenTouch](https://arxiv.org/abs/2512.16842) | Dataset / arXiv | [project](https://opentouch-tactile.github.io/) |
| 2025-12-09 | 12 Three-Axis Taxels, Human+Robot Shared Glove, 140 Demos | Meta FAIR | [OSMO](https://arxiv.org/abs/2512.08920) | Dataset / arXiv | [project](https://www.jessicayin.com/osmo_tactile_glove/) |
| 2025-12-04 | 3,048 Sequences, 381 Articulated Objects, Four Embodiments | ETH Zurich | [Hoi!](https://arxiv.org/abs/2512.04884) | Dataset / CVPR 2026 | [project](https://hoi-dataset.ethz.ch/index.html) |
| 2025-11-29 | RGB-D, Proprio, Fingertip Visuotactile, In-Hand Tasks | Shanghai Jiao Tong University | [MILE](https://arxiv.org/abs/2512.00324) | Dataset / arXiv | [project](https://sites.google.com/view/mile-system/home) |
| 2025-11-08 | Vision+Tactile, Wiping, Scooping | Tsinghua | [ViTaMIn-B](https://chuanyune.github.io/ViTaMIn-B_page/) | Dataset | [project](https://chuanyune.github.io/ViTaMIn-B_page/) / [paper](https://arxiv.org/abs/2511.05858) |
| 2025-09-23 | Wrist F/T, HDF5, Assembly | GIST | [ManipForce](https://sites.google.com/view/manipforce/) | Dataset | [project](https://sites.google.com/view/manipforce/) |
| 2025-07-20 | Tactile, Proprio, In-the-Wild | Columbia | [Touch in the Wild](https://binghao-huang.github.io/touch_in_the_wild/) | Dataset | [project](https://binghao-huang.github.io/touch_in_the_wild/) |
| 2025-06-02 | Visuo-Tactile, 10K Demos, 50 Tasks | Shanghai Innovation Institute | [FreeTacMan](https://arxiv.org/abs/2506.01941) | Dataset | [project](https://opendrivelab.com/FreeTacMan) / [github](https://github.com/OpenDriveLab/FreeTacMan) |
| 2025-04-08 | Vision+Tactile, Fine Manipulation | Tsinghua | [ViTaMIn](https://chuanyune.github.io/ViTaMIn_page/) | Dataset | [project](https://chuanyune.github.io/ViTaMIn_page/) |
| 2024-06-27 | Audio, Real-World, Manipulation | Stanford | [ManiWAV](https://mani-wav.github.io/) | Dataset | [project](https://mani-wav.github.io/) |

### Mobile / Whole-Body Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-17 | Whole-Body Human Motion, Object Interaction, Humanoid Prior | National University of Singapore | [HiPHI](https://arxiv.org/abs/2608.16222) | Dataset / Benchmark | [paper](https://arxiv.org/abs/2608.16222) |
| 2026-04-08 | Whole-Body Pose, Global Root, Humanoid Policy Transfer | University of Pennsylvania | [RoSHI](https://arxiv.org/abs/2604.07331) | Dataset / arXiv | [project](https://roshi-mocap.github.io/) |
| 2026-02-06 | Humanoid, Pelvis, Feet, Bimanual | Tsinghua | [HuMI](https://humanoid-manipulation-interface.github.io/) | Dataset | [project](https://humanoid-manipulation-interface.github.io/) / [paper](https://arxiv.org/abs/2602.06643) |
| 2024-07-14 | Legged, Mobile, Zarr | Stanford | [UMI on Legs](https://umi-on-legs.github.io/) | Dataset | [project](https://umi-on-legs.github.io/) |

## UMI Policy

Policies and support models that are trained on UMI-like data, evaluated in adjacent settings, or commonly used as UMI-relevant baselines.

### Imitation Learning

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-06 | Egocentric + Simulation + Robot Data, Dual Action Alignment | Joy Future Academy, JD | [JoyAI-RA 0.5: Scaling Robot Manipulation Learning via Dual Action Alignment](https://arxiv.org/abs/2608.05674) | arXiv | [project](https://joyai-ra-05.github.io/) |
| 2026-08-05 | Human Video, Visual/Grasp/Trajectory Affordances, Zero-Shot | University of Tokyo | [VLAff: Vision-Language-Affordance Model for Unified Actionable Affordances](https://arxiv.org/abs/2608.05215) | IROS 2026 | [project](https://ojh6404.github.io/) |
| 2026-07-31 | Contact-Rich Teleoperation, Impedance Retargeting, Force Safety | University of Tokyo | [MDIR: A Task-Manifold Impedance Retargeting Method for Contact-Rich Teleoperation](https://arxiv.org/abs/2607.29271) | arXiv | [paper](https://arxiv.org/abs/2607.29271) |
| 2026-07-30 | Cross-Embodiment, Behavior-Aligned Representations, End-Effector Traces | Stanford | [Cross-Embodiment Transfer via Behavior-Aligned Representations](https://arxiv.org/abs/2607.27549) | ICRA 2026 | [project](https://bar-x-anon.github.io/) |
| 2026-07-29 | Contact-Point Conditioning, Human+Robot Video, World Model | University of Bonn | [ContactFlow: A Video Action Conditioning That Transfers Across Embodiments](https://arxiv.org/abs/2607.26579) | arXiv | [paper](https://arxiv.org/abs/2607.26579) |
| 2026-07-28 | UMI-Only Post-Training, Bimanual, Zero-Robot Deployment | Simple AI | [HiFi-UMI: Learning Deployable Manipulation Policies from High-Fidelity UMI Data Alone](https://arxiv.org/abs/2607.25895) | arXiv | [project](https://cloud.simpleai.tech/simple-world-lab/hifi-umi/) / [dataset](https://huggingface.co/datasets/simple-world-lab/HiFi-UMI-2K) |
| 2026-07-22 | Human Recovery Data, Corrective Intent, Recovery Gate | Fudan University | [EgoRecovery: Acquiring Failure Recovery Ability Through Human Recovery Demonstration](https://arxiv.org/abs/2607.19745) | arXiv | [paper](https://arxiv.org/abs/2607.19745) |
| 2026-07-19 | Vision+Force Composition, Asynchronous Inference, Relative Actions | SJTU | [Asynchronous Multimodal Diffusion Policy Composition via Latency-Aware Guidance Fusion](https://arxiv.org/abs/2607.17257) | arXiv | [project](https://lag-fusion.github.io/) |
| 2026-07-14 | Single RGB-D Demo, Synthetic Augmentation, Mobile Manipulation | Carnegie Mellon University | [Worlds in One Demo: A Synthetic Data Engine for Learning Open-World Mobile Manipulation](https://arxiv.org/abs/2607.13154) | arXiv | [project](https://wanda.lecar-lab.org/) / [dataset](https://huggingface.co/datasets/LeCAR-Lab/Wanda) |
| 2026-07-08 | Egocentric Human Data, World Action Model, 3D Flow | Georgia Tech | [EgoWAM: World Action Models Beyond Pixels with In-the-Wild Egocentric Human Data](https://arxiv.org/abs/2607.08436) | arXiv | [project](https://gatech-rl2.github.io/egowam.github.io/) |
| 2026-06-29 | Behavior Prompt, In-Context Visuomotor Policy, Test-Time Adaptation | Stanford | [Behavior Prompting Policy: Demonstrations as Prompts for Manipulation](https://arxiv.org/abs/2606.30457) | arXiv | [project](https://behavior-prompting.github.io/) / [github](https://github.com/real-stanford/behavior_prompting) / [iPhUMI](https://github.com/real-stanford/iPhUMI) |
| 2026-06-25 | State-Gated Experts, Diffusion Policy, Contact-Rich | RAI Institute | [Bridging Handheld and Teleoperated Supervision for Contact-Rich Manipulation via State-Gated Experts](https://arxiv.org/abs/2606.26603) | arXiv | [project](https://nperi-rai.github.io/bridge-project/) |
| 2026-06-12 | Egocentric Residual Policy, Data Efficiency | SJTU | [EgoGuide: Egocentric Guidance for Efficient Robot-Free Demonstration Collection and Learning](https://arxiv.org/abs/2606.14665) | arXiv | [project](https://silicx.github.io/EgoGuide/) |
| 2026-06-11 | Joint-Space Guidance, Collision Avoidance, Zero-Shot Transfer | Tsinghua | [EmbodiSteer: Steering Embodiment-Agnostic Visuomotor Policies with Joint-Space Guidance for Zero-Shot Cross-Embodiment Deployment](https://arxiv.org/abs/2606.12965) | arXiv | [paper](https://arxiv.org/abs/2606.12965) |
| 2026-06-10 | Human Video Intent, Sim-to-Real, Cross-Embodiment | UIUC | [LUCID: Learning Embodiment-Agnostic Intent Models from Unstructured Human Videos for Scalable Dexterous Robot Skill Acquisition](https://arxiv.org/abs/2606.11628) | arXiv | [project](https://lucid-robot.github.io/) |
| 2026-06-10 | Generated Robot Demos, Visuomotor Policy, Robot-Data-Free | Georgia Tech | [EgoEngine: From Egocentric Human Videos to High-Fidelity Dexterous Robot Demonstrations](https://arxiv.org/abs/2606.12604) | arXiv / RSS 2026 Workshop | [project](https://egoengine.github.io/) |
| 2026-05-24 | Human Egocentric Video, Flow Matching, Zero-Shot Transfer | University of Maryland | [HumanEgo: Zero-Shot Robot Learning from Minutes of Human Egocentric Videos](https://arxiv.org/abs/2605.24934) | arXiv | [project](https://humanego-ai.github.io/) / [github](https://github.com/TX-Leo/HumanEgo) / [dataset](https://huggingface.co/datasets/Leo-TX/HumanEgo) |
| 2026-05-20 | Cross-View Diffusion, Mobile, Latency-Aware | Zhejiang University | [Mobile UMI: Cross-View Diffusion Policy with Decoupled Kinematics for Mobile Manipulation](https://arxiv.org/abs/2605.20894) | arXiv | [paper](https://arxiv.org/abs/2605.20894) |
| 2025-10-31 | Memory-Augmented Policy, Active Vision | UC Berkeley | [EgoMI: Learning Active Vision and Whole-Body Manipulation from Egocentric Human Demonstrations](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-10-15 | Tactile, Diffusion Policy, Force-Aware | TU Darmstadt / DFKI | [Tactile-Conditioned Diffusion Policy for Force-Aware Robotic Manipulation](https://arxiv.org/abs/2510.13324) | arXiv | [project](https://tactile-farm.github.io) |
| 2025-10-02 | Embodiment-Aware Diffusion, Controller Guidance | CMU | [UMI-on-Air: Embodiment-Aware Guidance for Embodiment-Agnostic Visuomotor Policies](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2025-04-06 | Human Tool Video, Tool-Centric Actions, Zero-Robot Policy | UIUC | [Tool-as-Interface: Learning Robot Policies from Observing Human Tool Use](https://arxiv.org/abs/2504.04612) | CoRL 2025 | [project](https://tool-as-interface.github.io/) |
| 2025-03-02 | Human-Only RGB-D, Data Editing, Zero-Shot Deployment | Stanford | [Phantom: Training Robots Without Robots Using Only Human Videos](https://arxiv.org/abs/2503.00779) | arXiv | [project](https://phantom-human-videos.github.io/) |
| 2024-10-31 | Egocentric, Imitation, Human Video | Georgia Tech | [EgoMimic: Scaling Imitation Learning via Egocentric Video](https://arxiv.org/abs/2410.24221) | arXiv | [project](https://egomimic.github.io/) / [github](https://github.com/SimarKareer/EgoMimic) |
| 2024-10-14 | 3D Diffusion Policy, Egocentric, Humanoid | Stanford / SFU / CMU | [iDP3: Generalizable Humanoid Manipulation with Improved 3D Diffusion Policies](https://arxiv.org/abs/2410.10803) | IROS 2025 | [project](https://humanoid-manipulation.github.io/) / [github](https://github.com/YanjieZe/Improved-3D-Diffusion-Policy) |
| 2024-10-10 | Force-Motion Demonstrations, Hybrid Force-Position Policy | Shanghai Jiao Tong University | [ForceMimic: Force-Centric Imitation Learning with Force-Motion Capture System for Contact-Rich Manipulation](https://arxiv.org/abs/2410.07554) | ICRA 2025 | [project](https://forcemimic.github.io/) / [github](https://github.com/ForceMimic) |
| 2024-05-20 | Generalist Policy, Open-Source, Cross-Embodiment | Berkeley | [Octo: An Open-Source Generalist Robot Policy](https://arxiv.org/abs/2405.12213) | arXiv | [project](https://octo-models.github.io/) |
| 2024-03-06 | 3D Diffusion Policy, Point Cloud, Generalizable | Shanghai Qi Zhi / SJTU / Tsinghua | [DP3: 3D Diffusion Policy — Generalizable Visuomotor Policy Learning via Simple 3D Representations](https://arxiv.org/abs/2403.03954) | RSS 2024 | [project](https://3d-diffusion-policy.github.io/) / [github](https://github.com/YanjieZe/3D-Diffusion-Policy) |
| 2024-03-05 | VQ-VAE, Behavior Generation, Fast Inference | CMU / UC Berkeley | [VQ-BeT: Behavior Generation with Latent Actions](https://arxiv.org/abs/2403.03181) | ICML 2024 | [project](https://sjlee.cc/vq-bet/) / [github](https://github.com/jayLEE0301/vq_bet_official) |
| 2024-02-16 | 3D Scene, Diffusion, Language-Conditioned | CMU | [3D Diffuser Actor: Policy Diffusion with 3D Scene Representations](https://arxiv.org/abs/2402.10885) | CoRL 2024 | [project](https://3d-diffuser-actor.github.io/) / [github](https://github.com/nickgkan/3d_diffuser_actor) |
| 2024-02-15 | Relative Actions, Latency Matching, Imitation | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [github](https://github.com/real-stanford/universal_manipulation_interface) |
| 2024-01-04 | Mobile ALOHA, Whole-Body, Bimanual | Stanford | [Mobile ALOHA: Learning Bimanual Mobile Manipulation with Low-Cost Whole-Body Teleoperation](https://arxiv.org/abs/2401.02117) | arXiv | [project](https://mobile-aloha.github.io) |
| 2023-10-13 | RT-X, Cross-Embodiment, Multi-Dataset | Stanford | [Open X-Embodiment: Robotic Learning Datasets and RT-X Models](https://arxiv.org/abs/2310.08864) | arXiv | [project](https://robotics-transformer-x.github.io/) / [github](https://github.com/google-deepmind/open_x_embodiment) |
| 2023-09-18 | One-Shot BC, Action Chunking | CMU | [One ACT Play: Single Demonstration Behavior Cloning with Action Chunking Transformers](https://arxiv.org/abs/2309.10175) | arXiv | [paper](https://arxiv.org/abs/2309.10175) |
| 2023-09-05 | Semantic Augmentation, Action Chunking, IL | CMU | [RoboAgent: Towards Sample Efficient Robot Manipulation with Semantic Augmentations and Action Chunking](https://arxiv.org/abs/2309.01918) | ICRA 2024 | [project](https://robopen.github.io/) / [github](https://github.com/robopen/roboagent/) |
| 2023-04-23 | ACT, Bimanual, Low-Cost Hardware | Stanford | [Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware](https://arxiv.org/abs/2304.13705) | arXiv | [project](https://tonyzhaozh.github.io/aloha/) |
| 2023-03-07 | Diffusion Policy, Visuomotor, Receding Horizon | Columbia | [Diffusion Policy: Visuomotor Policy Learning via Action Diffusion](https://arxiv.org/abs/2303.04137) | RSS 2023 | [project](https://diffusion-policy.cs.columbia.edu/) |
| 2021-08-06 | Offline IL, Manipulation Benchmark, robomimic | Stanford | [What Matters in Learning from Offline Human Demonstrations for Robot Manipulation](https://arxiv.org/abs/2108.03298) | CoRL 2021 | [project](https://robomimic.github.io/) / [github](https://github.com/ARISE-Initiative/robomimic) |

### Reinforcement Learning

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-03 | Unified Hand Action Space, Cross-Embodiment, DexHand RL | UT Dallas | [Cross-Embodiment Robot Manipulation via a Unified Hand Action Space](https://arxiv.org/abs/2607.03570) | arXiv / RSS 2026 Workshop | [project](https://irvlutd.github.io/UHAS/) |
| 2026-06-03 | Flow-Matching VLA, Preference RL, Bimanual | Tencent Robotics X | [FlowPRO: Reward-Free Reinforced Fine-Tuning of Flow-Matching VLAs via Proximalized Preference Optimization](https://arxiv.org/abs/2606.05468) | arXiv | [project](https://wuyeyexvnainai.github.io/flowpro/) |
| 2025-09-30 | RL + UMI, Embodied Planning, Verifiable Reward | Xiaomi Robotics Lab | [Reinforced Embodied Planning with Verifiable Reward for Real-World Robotic Manipulation](https://arxiv.org/abs/2509.25852) | arXiv | [paper](https://arxiv.org/abs/2509.25852) |
| 2025-03-03 | Multi-Stage RL, Demo-Augmented, World Model | UC San Diego | [DEMO³: Multi-Stage Manipulation with Demonstration-Augmented Reward, Policy, and World Model Learning](https://arxiv.org/abs/2503.01837) | ICML 2025 | [project](https://adrialopezescoriza.github.io/demo3/) / [github](https://github.com/adrialopezescoriza/demo3) |
| 2024-10-29 | Human-in-the-Loop RL, Dexterous, Real-World | UC Berkeley | [HIL-SERL: Precise and Dexterous Robotic Manipulation via Human-in-the-Loop Reinforcement Learning](https://arxiv.org/abs/2410.21845) | arXiv | [project](https://hil-serl.github.io/) / [github](https://github.com/rail-berkeley/hil-serl) |
| 2024-09-01 | Diffusion Policy, Policy Gradient, Fine-Tuning | Princeton / MIT | [DPPO: Diffusion Policy Policy Optimization](https://arxiv.org/abs/2409.00588) | arXiv | [project](https://diffusion-ppo.github.io/) |
| 2023-02-06 | Off-Policy RL, Offline Data, Sample Efficient | Oxford / UC Berkeley | [RLPD: Efficient Online Reinforcement Learning with Offline Data](https://arxiv.org/abs/2302.02948) | ICML 2023 | [github](https://github.com/ikostrikov/rlpd) |

### VLA

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-26 | Human-Video Prompt, In-Context Actions, 74.2K Human-Robot Pairs, Unseen Tasks | Robbyant | [Zero-WAM: In-Context World-Action Modeling from Human Videos for Open-Ended Task Generalization](https://arxiv.org/abs/2608.26103) | arXiv | [project](https://robbyant-research.github.io/Zero-WAM/) / [github](https://github.com/robbyant-research/Zero-WAM) |
| 2026-08-26 | Camera-Centric Anchor Motion, Human+Robot Data, Cross-Embodiment Action Translator | Xiaomi Embodied Intelligence | [One Policy, Many Embodiments: Unified Camera-Centric Action Geometry Pre-training for Heterogeneous Embodied Manipulation](https://arxiv.org/abs/2608.26058) | arXiv | [project](https://public-bots.github.io/UCAG-P) / [github](https://github.com/Public-BOTs/UCAG-P) |
| 2026-08-23 | Human+Robot Video, Motion-Aligned Latent Dynamics, Gripper+DexHand, 5K+ Hours | Peking University | [LD4WAM: Learning Latent Dynamics from Human Videos for World Action Models](https://arxiv.org/abs/2608.22403) | arXiv | [project](https://stubborn111.github.io/LD4WAM/) |
| 2026-08-06 | Cross-Embodiment, Dynamics Priors, Native Action Experts | HKUST (Guangzhou) | [DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation](https://arxiv.org/abs/2608.06374) | arXiv | [project](https://livfour.github.io/DyPES-VLA_RELEASE/) |
| 2026-08-06 | Interactive World Model, Visual Actions, Human Teleoperation | Tsinghua University | [GeniWorld: A Generalizable Interactive World Model for Robotic Manipulation via Visual Actions](https://arxiv.org/abs/2608.06332) | arXiv | [project](https://chenghaogu.github.io/GeniWorld/) |
| 2026-08-06 | Cross-Embodiment World Model, Held-Out Robots, Benchmark | Chinese Academy of Sciences | [XEWorld: Can Action-Conditioned World Models Generalize to Unseen Robot Embodiments?](https://arxiv.org/abs/2608.05799) | arXiv | [paper](https://arxiv.org/abs/2608.05799) |
| 2026-08-06 | Egocentric + Simulation + Robot Data, Dual Action Alignment | Joy Future Academy, JD | [JoyAI-RA 0.5: Scaling Robot Manipulation Learning via Dual Action Alignment](https://arxiv.org/abs/2608.05674) | arXiv | [project](https://joyai-ra-05.github.io/) |
| 2026-08-05 | Task-Conditioned Wrist Prediction, Fine-Grained Contact | HKUST | [World-to-Wrist: Task-Conditioned Future Wrist Modeling for Fine-Grained Robot Manipulation](https://arxiv.org/abs/2608.05369) | arXiv | [paper](https://arxiv.org/abs/2608.05369) |
| 2026-08-05 | Human Video, 3D Affordances, Unified Actionable Outputs | University of Tokyo | [VLAff: Vision-Language-Affordance Model for Unified Actionable Affordances](https://arxiv.org/abs/2608.05215) | IROS 2026 | [project](https://ojh6404.github.io/) |
| 2026-07-20 | Force Memory, Non-Markovian Tasks, Contact-Rich VLA | Tsinghua | [FM-VLA: Force-based Memory for Vision-Language-Action Models in Contact-Rich Manipulation](https://arxiv.org/abs/2607.18231) | arXiv | [project](https://qft-333.github.io/FM-VLA-Page/) |
| 2026-07-16 | UMI Pretraining, 100K Hours, Mobile Manipulation | Xiaomi Robotics Lab | [Xiaomi-Robotics-1: Scaling Vision-Language-Action Models with over 100K Hours of Real-World Trajectories](https://arxiv.org/abs/2607.15330) | arXiv | [project](https://robotics.xiaomi.com/xiaomi-robotics-1.html) |
| 2026-07-16 | Future Tactile Prediction, Action-Expert Features, VLA | Fudan University | [Representation-Aligned Tactile Grounding for Contact-Rich Robotic Manipulation](https://arxiv.org/abs/2607.14609) | arXiv | [paper](https://arxiv.org/abs/2607.14609) |
| 2026-07-07 | LingBot-VLA 2.0, 20 Embodiments, Human Video | Robbyant | [From Foundation to Application: Improving VLA Models in Practice](https://github.com/Robbyant/lingbot-vla-v2/blob/main/assets/LingBot_VLA_2_0.pdf) | Tech Report | [github](https://github.com/Robbyant/lingbot-vla-v2) / [model](https://huggingface.co/robbyant/lingbot-vla-v2-6b) / [paper](https://arxiv.org/abs/2607.06403) |
| 2026-06-22 | Wrist-View Masking, Zero-Shot Transfer, Unseen End-Effectors | Stanford | [Cloak: Zero-Shot Cross-Embodiment Manipulation by Masking the End-Effector from the VLA](https://arxiv.org/abs/2606.22836) | arXiv | [project](https://tml.stanford.edu/cloak/) |
| 2026-06-20 | Whole-Body VLA, HuMI Co-Training, Loco-Manipulation | Tsinghua | [OpenHLM: An Empirical Recipe for Whole-Body Humanoid Loco-Manipulation](https://arxiv.org/abs/2606.22174) | arXiv | [project](https://openhlm-project.github.io/) / [github](https://github.com/OpenHLM-project/OpenHLM) / [dataset](https://huggingface.co/datasets/OpenHLM/OpenHLM-data) / [models](https://huggingface.co/OpenHLM/OpenHLM-ckpts) |
| 2026-06-17 | Humanoid VLA, Active Perception, Transfer | SJTU | [HALOMI: Learning Humanoid Loco-Manipulation with Active Perception from Human Demonstrations](https://arxiv.org/abs/2606.18772) | arXiv | [project](https://halomi-humanoid.github.io/) |
| 2026-06-15 | Human+Robot Pretraining, Camera-Space Actions, Morphology | ACE Robotics | [ACE-Ego-0: Unifying Egocentric Human and Robotic Data for VLA Pretraining](https://arxiv.org/abs/2606.17200) | arXiv | [github](https://github.com/ACERobotics-VLA/ACE-Ego-0) |
| 2026-06-12 | UMI Pretraining, Flow-Matching VLA, Cross-Embodiment | Tencent Robotics X | [Hy-Embodied-0.5-VLA: From Vision-Language-Action Models to a Real-World Robot Learning Stack](https://arxiv.org/abs/2606.14409) | arXiv | [project](https://tairos.tencent.com/openSourceModels/hy-embodied-0.5-vla) / [github](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) / [model](https://huggingface.co/tencent/Hy-Embodied-0.5-VLA-UMI) / [data](https://huggingface.co/datasets/tencent/Hy-Embodied-0.5-VLA-Data) |
| 2026-06-03 | UMI Data, VLA, Physical Validation | TeleAI | [VISTA: Vision-Grounded and Physics-Validated Adaptation of UMI data for VLA Training](https://arxiv.org/abs/2606.04708) | arXiv | [project](https://tele-umi-vista.github.io/) / [github](https://github.com/TeleHuman/umi-vista) / [dataset](https://huggingface.co/collections/TeleEmbodied/vista) |
| 2026-02-03 | UMI Data, Cross-Embodiment, Generalist Policy | Tsinghua | [RDT2: Exploring the Scaling Limit of UMI Data Towards Zero-shot Cross-embodiment Generalization](https://arxiv.org/abs/2602.03310) | arXiv | [project](https://rdt-robotics.github.io/rdt2/) / [github](https://github.com/thu-ml/RDT2) |
| 2024-10-31 | pi0, VLA, Flow Matching | Physical Intelligence | [π0: A Vision-Language-Action Flow Model for General Robot Control](https://arxiv.org/abs/2410.24164) | RSS 2025 | [page](https://physicalintelligence.company/blog/pi0) |
| 2024-06-13 | OpenVLA, Open-Source, Transfer | Stanford | [OpenVLA: An Open-Source Vision-Language-Action Model](https://arxiv.org/abs/2406.09246) | arXiv | [project](https://openvla.github.io/) |
| 2023-07-28 | RT-2, VLA, Generalist Control | Google DeepMind | [RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control](https://arxiv.org/abs/2307.15818) | arXiv | [project](https://robotics-transformer2.github.io/) |
| 2022-12-13 | RT-1, Robotics Transformer, Real-World Control | Google | [RT-1: Robotics Transformer for Real-World Control at Scale](https://arxiv.org/abs/2212.06817) | arXiv | [project](https://robotics-transformer1.github.io/) |

## UMI Taxonomy

Structured references for embodiments, observation modalities, pose tracking, action spaces, storage formats, and evaluation dimensions in the UMI ecosystem.

### Embodiments

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-17 | Reconfigurable DexHand+Humanoid, 27-DoF | UNC Chapel Hill | [Handroid](https://arxiv.org/abs/2607.16187) | arXiv | [project](https://handroid.org/) |
| 2026-06-17 | Humanoid Loco-Manipulation, Head-Hand | SJTU | [HALOMI](https://arxiv.org/abs/2606.18772) | arXiv | [project](https://halomi-humanoid.github.io/) |
| 2026-06-11 | Humanoid, Whole-Body Tactile | Georgia Tech | [WT-UMI](https://wt-umi.github.io/WTUMI/) | arXiv | [paper](https://arxiv.org/abs/2606.13232) / [project](https://wt-umi.github.io/WTUMI/) |
| 2026-06-08 | Bidigital Gripper, Bimanual | AIRoA | [YUBI](https://yubi.airoa.io/) | Dataset | [paper](https://arxiv.org/abs/2606.10244) / [project](https://yubi.airoa.io/) |
| 2026-06-04 | Wearable Dexterous Hand | Peking University | [RealDexUMI](https://research.beingbeyond.com/realdexumi) | arXiv | [paper](https://arxiv.org/abs/2606.06033) / [project](https://research.beingbeyond.com/realdexumi) |
| 2026-05-20 | Mobile Base + Manipulator | Zhejiang University | [Mobile UMI](https://arxiv.org/abs/2605.20894) | arXiv | [paper](https://arxiv.org/abs/2605.20894) |
| 2026-05-05 | Humanoid Whole-Body, VR-UMI | BAAI | [BifrostUMI](https://arxiv.org/abs/2605.03452) | arXiv | [project](https://baai-aether.github.io/BifrostUMI/) |
| 2026-02-06 | Humanoid, Pelvis, Feet, Bimanual | Tsinghua | [HuMI](https://humanoid-manipulation-interface.github.io/) | Dataset | [project](https://humanoid-manipulation-interface.github.io/) / [paper](https://arxiv.org/abs/2602.06643) |
| 2025-10-31 | Semi-Humanoid, Active Head | UC Berkeley | [EgoMI](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-10-02 | Aerial Manipulator, Controller-Constrained | CMU | [UMI-on-Air](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2025-05-28 | Dexterous Hand, Inspire, XHand | Stanford | [DexUMI](https://umi-data.github.io/) | Dataset | [data](https://umi-data.github.io/) |
| 2024-07-14 | Legged, Mobile Manipulation | Stanford | [UMI on Legs](https://umi-on-legs.github.io/) | Dataset | [project](https://umi-on-legs.github.io/) |
| 2024-02-15 | Bimanual, Parallel Gripper | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) |

### Observation Modalities

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-25 | Fiber Shape, Full-Hand Pose, 60 Hz, 4.9 mm Calibrated Fingertip Error | Meta | [Fiber Optic Sensing Glove](https://arxiv.org/abs/2608.24572) | arXiv | [paper](https://arxiv.org/abs/2608.24572) |
| 2026-08-23 | Egocentric Context, Bimanual Hand Motion, Explicit Per-Hand Plans | Institute of Computing Technology, CAS | [EMPIRE](https://arxiv.org/abs/2608.22449) | Dataset / arXiv | [github](https://github.com/wangwen-banban/EMPIRE) |
| 2026-08-21 | Human Vision+Touch, Mass, Friction, Continuous Stiffness | Xiaomi Robotics | [ViTacPhys](https://arxiv.org/abs/2608.21355) | arXiv | [project](https://vitacphys.github.io/ViTacPhys/) |
| 2026-08-17 | Optical MoCap, Sub-Millimeter Markers, Mesh Object Trajectories | National University of Singapore | [HiPHI](https://arxiv.org/abs/2608.16222) | Dataset / Benchmark | [paper](https://arxiv.org/abs/2608.16222) |
| 2026-08-08 | Synchronized Stereo, 6-Axis IMU, Hand Detections, Calibration | FPV Labs | [Ego-OSCAR](https://arxiv.org/abs/2608.08285) | Dataset / arXiv | [paper](https://arxiv.org/abs/2608.08285) |
| 2026-08-05 | Main View + Wrist View, Future Wrist Latents, Bimanual | HKUST | [World-to-Wrist: Task-Conditioned Future Wrist Modeling for Fine-Grained Robot Manipulation](https://arxiv.org/abs/2608.05369) | arXiv | [paper](https://arxiv.org/abs/2608.05369) |
| 2026-08-05 | Egocentric Video, 3D SfM, Hand Mesh, Affordances | University of Tokyo | [VLAff: Vision-Language-Affordance Model for Unified Actionable Affordances](https://arxiv.org/abs/2608.05215) | IROS 2026 | [project](https://ojh6404.github.io/) |
| 2026-07-31 | Wearable Fingertip Tactile, Contact Depth, Human-to-Robot Replay | Chinese Academy of Sciences | [TacPrint: A Wearable Fingertip Tactile Sensor for Human-to-Robot Contact Reproduction](https://arxiv.org/abs/2607.29231) | arXiv | [paper](https://arxiv.org/abs/2607.29231) |
| 2026-07-20 | Force History, Wrench Memory, State History | Tsinghua | [FM-VLA](https://arxiv.org/abs/2607.18231) | arXiv | [project](https://qft-333.github.io/FM-VLA-Page/) |
| 2026-07-16 | Future Tactile Embeddings, Contact Outcomes | Fudan University | [Representation-Aligned Tactile Grounding](https://arxiv.org/abs/2607.14609) | arXiv | [paper](https://arxiv.org/abs/2607.14609) |
| 2026-06-24 | sEMG, IMU, Per-Finger Force | Amazon FAR | [ForceBand](https://arxiv.org/abs/2606.26093) | arXiv | [project](https://forceband-emg.github.io/) |
| 2026-06-17 | Ego-View, Wrist-View, Head-Hand Trajectory | SJTU | [HALOMI](https://arxiv.org/abs/2606.18772) | arXiv | [project](https://halomi-humanoid.github.io/) |
| 2026-06-15 | 22-DoF Hand Motion, 2048-Taxel Contact | Carnegie Mellon University | [ART-Glove](https://arxiv.org/abs/2606.16370) | arXiv | [project](https://linchangyi1.github.io/ART-Glove/) |
| 2026-06-12 | Wrist + Head/Egocentric, AR Guidance | SJTU | [EgoGuide](https://arxiv.org/abs/2606.14665) | arXiv | [project](https://silicx.github.io/EgoGuide/) |
| 2026-06-11 | Tactile Image, Contact Force, EE Pose | Georgia Tech | [WT-UMI](https://wt-umi.github.io/WTUMI/) | arXiv | [paper](https://arxiv.org/abs/2606.13232) / [project](https://wt-umi.github.io/WTUMI/) |
| 2026-06-08 | Force, Vision, Tactile | SJTU | [AetheRock](https://arxiv.org/abs/2606.09777) | arXiv | [paper](https://arxiv.org/abs/2606.09777) |
| 2026-06-08 | Wrist RGB, Top View, VR Tracking | AIRoA | [YUBI](https://yubi.airoa.io/) | Dataset | [paper](https://arxiv.org/abs/2606.10244) / [project](https://yubi.airoa.io/) |
| 2026-06-04 | In-Hand RGB, Tactile, Hand State | Peking University | [RealDexUMI](https://research.beingbeyond.com/realdexumi) | arXiv | [paper](https://arxiv.org/abs/2606.06033) / [project](https://research.beingbeyond.com/realdexumi) |
| 2026-06-03 | Wrist Fisheye, VQA, Physical Scores | TeleAI | [VISTA](https://tele-umi-vista.github.io/) | Dataset / VLA | [paper](https://arxiv.org/abs/2606.04708) / [dataset](https://huggingface.co/collections/TeleEmbodied/vista) |
| 2026-05-24 | Aria RGB, SLAM, Hand/Object 6-DoF | University of Maryland | [HumanEgo](https://arxiv.org/abs/2605.24934) | Dataset / Policy | [project](https://humanego-ai.github.io/) / [dataset](https://huggingface.co/datasets/Leo-TX/HumanEgo) |
| 2026-04-26 | Head-Mounted RGB, Hand Reconstruction, Depth | Joy Future Academy, JD | [EgoLive](https://arxiv.org/abs/2604.23570) | Dataset / arXiv | [paper](https://arxiv.org/abs/2604.23570) |
| 2026-04-15 | Image, LiDAR, Point Cloud | HKU | [UMI-3D](https://umi-3d.github.io/) | Dataset | [paper](https://arxiv.org/abs/2604.14089) / [dataset](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) |
| 2026-04-12 | RGB, Depth, Tactile, Force/Wrench | BAAI | [OmniUMI](https://arxiv.org/abs/2604.10647) | arXiv | [paper](https://arxiv.org/abs/2604.10647) |
| 2026-04-08 | Multi-View Video, Tactile, Trajectory | Fudan University | [TAMEn](https://opendrivelab.com/TAMEn) | arXiv / Dataset | [paper](https://arxiv.org/abs/2604.07335) / [dataset](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) |
| 2026-03-18 | First-Person RGB, Dense Tactile, EE Pose, Hand Kinematics | Huazhong University of Science and Technology | [DexViTac](https://arxiv.org/abs/2603.17851) | Dataset / arXiv | [project](https://xitong-c.github.io/DexViTac/) |
| 2025-12-18 | Egocentric Video, Full-Hand Touch, Hand Pose | MIT | [OpenTouch](https://arxiv.org/abs/2512.16842) | Dataset / arXiv | [project](https://opentouch-tactile.github.io/) |
| 2025-12-09 | 12 Three-Axis Tactile Sensors, Normal+Shear Force | Meta FAIR | [OSMO](https://arxiv.org/abs/2512.08920) | arXiv | [project](https://www.jessicayin.com/osmo_tactile_glove/) |
| 2025-12-04 | RGB, Depth, Joint Angles, 6-Axis Force/Torque | ETH Zurich | [Hoi!](https://arxiv.org/abs/2512.04884) | Dataset / CVPR 2026 | [project](https://hoi-dataset.ethz.ch/index.html) |
| 2025-11-08 | Image, Tactile | Tsinghua | [ViTaMIn-B](https://chuanyune.github.io/ViTaMIn-B_page/) | Dataset | [project](https://chuanyune.github.io/ViTaMIn-B_page/) / [paper](https://arxiv.org/abs/2511.05858) |
| 2025-10-31 | Head View, Wrist Views, Head/Hand Poses | UC Berkeley | [EgoMI](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-09-23 | Wrist RGB + Third-Person RGB | NYU Abu Dhabi | [MV-UMI](https://arxiv.org/abs/2509.18757) | Dataset / arXiv | [project](https://mv-umi.github.io/) |
| 2025-09-23 | Image x2, Wrist F/T | GIST | [ManipForce](https://sites.google.com/view/manipforce/) | Dataset | [project](https://sites.google.com/view/manipforce/) |
| 2025-07-20 | Image, Tactile, Proprio | Columbia | [Touch in the Wild](https://binghao-huang.github.io/touch_in_the_wild/) | Dataset | [project](https://binghao-huang.github.io/touch_in_the_wild/) |
| 2024-06-27 | Image, Audio, Proprio | Stanford | [ManiWAV](https://mani-wav.github.io/) | Dataset | [project](https://mani-wav.github.io/) |
| 2024-02-15 | Image, Proprio, Bimanual | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) |

### Pose Tracking / State Estimation

Pose tracking turns robot-free capture into metric action labels. `UMI-Used` marks a tracker or state-estimation design actually used by a UMI system; `UMI-Adjacent` marks a demonstrated egocentric or robot-free capture design that is directly transferable; `Candidate` marks a promising substitute or supporting method without a demonstrated UMI integration. Prefer metric 6-DoF estimates with hardware-aligned timestamps; monocular visual-only methods need an explicit scale source before they can supervise SE(3) actions.

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-08 | UMI-Adjacent, Stereo-Inertial, Global Shutter, Hardware Sync | FPV Labs | [Ego-OSCAR: Egocentric Open source Stereo CAptuRe System](https://arxiv.org/abs/2608.08285) | arXiv | [paper](https://arxiv.org/abs/2608.08285) |
| 2026-07-28 | UMI-Used, Stereo-Inertial SLAM, Relative Pose, Hardware Sync | Simple AI | [HiFi-UMI: Learning Deployable Manipulation Policies from High-Fidelity UMI Data Alone](https://arxiv.org/abs/2607.25895) | arXiv | [project](https://cloud.simpleai.tech/simple-world-lab/hifi-umi/) / [dataset](https://huggingface.co/datasets/simple-world-lab/HiFi-UMI-2K) |
| 2026-07-27 | Candidate, Structured-Light Depth, Depth-Centric SLAM | Peking University | [NSL-SLAM: High-Fidelity Neural Structured-Light Depth for Practical SLAM and Reconstruction](https://arxiv.org/abs/2607.24495) | arXiv | [paper](https://arxiv.org/abs/2607.24495) |
| 2026-06-19 | Candidate, WIO/VIO/LIO/LVIO, Online Spatiotemporal Calibration | Beijing Institute of Technology | [Ultra-Fusion: A Resilient Tightly-Coupled Multi-Sensor Fusion SLAM Framework under Sensor Degradation and Spatiotemporal Perturbation for Intelligent Transportation Systems](https://arxiv.org/abs/2606.21223) | arXiv | [project](https://sjtuyinjie.github.io/ultrafusion-web/) / [github](https://github.com/sjtuyinjie/Ultra-Fusion) |
| 2026-06-04 | UMI-Used, External 6-DoF Tracker, Hand-Frame SE(3) | Peking University | [RealDexUMI: A Wearable Universal Manipulation Interface for Dexterous Robot Learning](https://arxiv.org/abs/2606.06033) | arXiv | [project](https://research.beingbeyond.com/realdexumi) |
| 2026-05-24 | UMI-Adjacent, Stereo-Inertial SLAM, 3D Hand Tracking | University of Maryland | [HumanEgo: Zero-Shot Robot Learning from Minutes of Human Egocentric Videos](https://arxiv.org/abs/2605.24934) | arXiv | [project](https://humanego-ai.github.io/) / [github](https://github.com/TX-Leo/HumanEgo) |
| 2026-05-20 | UMI-Used, Dual OpenVINS, ChArUco Frame Alignment | Zhejiang University | [Mobile UMI: Cross-View Diffusion Policy with Decoupled Kinematics for Mobile Manipulation](https://arxiv.org/abs/2605.20894) | arXiv | [OpenVINS](https://github.com/rpng/open_vins) |
| 2026-05-08 | Candidate, Stereo Event-Inertial SLAM, HDR, Motion-Blur Resistance | ETH Zurich | [AERO-VIS: Asynchronous Event-based Real-time Onboard Visual-Inertial SLAM](https://arxiv.org/abs/2605.07885) | arXiv | [project](https://ethz-mrl.github.io/AERO-VIS/) |
| 2026-05-05 | UMI-Used, VR Inside-Out Tracking, Sparse Body Trackers | BAAI | [BifrostUMI: Bridging Robot-Free Demonstrations and Humanoid Whole-Body Manipulation](https://arxiv.org/abs/2605.03452) | arXiv | [project](https://baai-aether.github.io/BifrostUMI/) |
| 2026-04-15 | UMI-Used, LiDAR-Inertial SLAM, ESIKF, Calibrated Camera Pose | HKU | [UMI-3D: Extending Universal Manipulation Interface from Vision-Limited to 3D Spatial Perception](https://arxiv.org/abs/2604.14089) | arXiv | [project](https://umi-3d.github.io/) / [dataset](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) |
| 2026-04-08 | UMI-Adjacent, Aria SLAM+9 IMUs, Metric Root, Full-Body Pose | University of Pennsylvania | [RoSHI: A Versatile Robot-oriented Suit for Human Data In-the-Wild](https://arxiv.org/abs/2604.07331) | arXiv | [project](https://roshi-mocap.github.io/) |
| 2026-03-05 | UMI-Adjacent, Phone VIO, Fisheye, World-Map Merging | SJTU | [RoboPocket: Improve Robot Policies Instantly with Your Phone](https://arxiv.org/abs/2603.05504) | arXiv | [project](https://robo-pocket.github.io/) |
| 2026-02-06 | UMI-Used, Vive Inside-Out Trackers, Whole-Body Pose | Tsinghua | [Humanoid Manipulation Interface: Humanoid Whole-Body Manipulation from Robot-Free Demonstrations](https://arxiv.org/abs/2602.06643) | arXiv | [project](https://humanoid-manipulation-interface.github.io/) |
| 2025-12-16 | Candidate, Structured-Light Depth, Neural Decoding | Peking University | [Robust Single-shot Structured Light 3D Imaging via Neural Feature Decoding](https://arxiv.org/abs/2512.14028) | SIGGRAPH Asia 2025 | [project](https://namisntimpot.github.io/NSLweb/) |
| 2025-10-07 | Candidate, Metric Monocular Depth, Dynamic Masking, RGB-D Backend | Technical University of Munich | [Dropping the D: RGB-D SLAM Without the Depth Sensor](https://arxiv.org/abs/2510.06216) | arXiv | [project](https://tum-pf.github.io/dropd-slam/) |
| 2025-10-02 | UMI-Used, VR Inside-Out Tracking, Head/Controller 6-DoF | Shanghai University | [ActiveUMI: Robotic Manipulation with Active Perception from Robot-Free Human Demonstrations](https://arxiv.org/abs/2510.01607) | arXiv | [project](https://activeumi.github.io/) |
| 2025-09-06 | Candidate, Multi-Fisheye LVIO, Panoramic Features, Loop Closure | Tongji University | [Multi-LVI-SAM: A Robust LiDAR-Visual-Inertial Odometry for Multiple Fisheye Cameras](https://arxiv.org/abs/2509.05740) | arXiv | [paper](https://arxiv.org/abs/2509.05740) |
| 2025-05-28 | UMI-Used, iPhone ARKit, Wrist Pose | Stanford | [DexUMI: Using Human Hand as the Universal Manipulation Interface for Dexterous Manipulation](https://arxiv.org/abs/2505.21864) | CoRL 2025 | [github](https://github.com/real-stanford/DexUMI) |
| 2025-01-11 | Candidate, Neural RGB-D SLAM, Dense Tracking, Scene Priors | Zhejiang University of Technology | [SP-SLAM: Neural Real-Time Dense SLAM With Scene Priors](https://arxiv.org/abs/2501.06469) | arXiv | [paper](https://arxiv.org/abs/2501.06469) |
| 2024-12-16 | Candidate, Learned Monocular SLAM, Camera-Model Agnostic, Dense Geometry | Imperial College London | [MASt3R-SLAM: Real-Time Dense SLAM with 3D Reconstruction Priors](https://arxiv.org/abs/2412.12392) | CVPR 2025 | [project](https://edexheim.github.io/mast3r-slam/) / [github](https://github.com/rmurai0610/MASt3R-SLAM) |
| 2024-09-29 | UMI-Used, RealSense T265 VIO, Off-the-Shelf Tracking | Shanghai AI Lab | [FastUMI: A Scalable and Hardware-Independent Universal Manipulation Interface with Dataset](https://arxiv.org/abs/2409.19499) | arXiv | [project](https://fastumi.com/) / [data](https://huggingface.co/datasets/IPEC-COMMUNITY/FastUMI-Data) |
| 2024-08-26 | Candidate, Direct LVIO, ESIKF, Unified Voxel Map | HKU | [FAST-LIVO2: Fast, Direct LiDAR-Inertial-Visual Odometry](https://arxiv.org/abs/2408.14035) | arXiv | [github](https://github.com/hku-mars/FAST-LIVO2) |
| 2024-03-10 | Candidate, RGB-D/Stereo/LiDAR, Graph SLAM, Loop Closure | Université de Sherbrooke | [RTAB-Map as an Open-Source Lidar and Visual SLAM Library for Large-Scale and Long-Term Online Operation](https://arxiv.org/abs/2403.06341) | JFR 2019 | [project](https://introlab.github.io/rtabmap/) / [github](https://github.com/introlab/rtabmap) |
| 2024-02-15 | UMI-Used, Monocular-Inertial, Raw Fisheye, Metric Scale | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) / [github](https://github.com/real-stanford/universal_manipulation_interface) |
| 2024-01-12 | Candidate, Metric-Semantic VIO, Mono/Stereo/RGB-D, Robust Loop Closure | MIT | [Kimera2: Robust and Accurate Metric-Semantic SLAM in the Real World](https://arxiv.org/abs/2401.06323) | ISER 2023 | [github](https://github.com/MIT-SPARK/Kimera) |
| 2023-12-04 | Candidate, RGB-D SLAM, 3D Gaussian Tracking, Dense Mapping | Carnegie Mellon University | [SplaTAM: Splat, Track & Map 3D Gaussians for Dense RGB-D SLAM](https://arxiv.org/abs/2312.02126) | CVPR 2024 | [project](https://spla-tam.github.io/) / [github](https://github.com/spla-tam/SplaTAM) |
| 2023-06-01 | Candidate, Multi-Fisheye VIO, Factor Graph, Dense Depth | Huawei Munich Research Center | [BAMF-SLAM: Bundle Adjusted Multi-Fisheye Visual-Inertial SLAM Using Recurrent Field Transforms](https://arxiv.org/abs/2306.01173) | ICRA 2023 | [paper](https://arxiv.org/abs/2306.01173) |
| 2023-04-21 | Candidate, RGB-D-Inertial Odometry, Dynamic-Object Rejection, Lightweight | Harbin Institute of Technology, Shenzhen | [RGB-D Inertial Odometry for a Resource-Restricted Robot in Dynamic Environments](https://arxiv.org/abs/2304.10987) | RA-L 2022 | [github](https://github.com/HITSZ-NRSL/Dynamic-VINS) |
| 2023-04-07 | Candidate, High-Bandwidth LIO, Aggressive Motion, Solid-State LiDAR | HKU | [Point-LIO: Robust High-Bandwidth Light Detection and Ranging Inertial Odometry](https://hub.hku.hk/bitstream/10722/331147/1/content.pdf) | Advanced Intelligent Systems 2023 | [github](https://github.com/hku-mars/Point-LIO) |
| 2022-12-01 | Candidate, Multi-Modal Mapping, Multi-Session, Non-Visual Landmarks | ETH Zurich | [maplab 2.0 -- A Modular and Multi-Modal Mapping Framework](https://arxiv.org/abs/2212.00654) | RA-L 2023 | [github](https://github.com/ethz-asl/maplab) |
| 2022-09-30 | Candidate, LiDAR Odometry, Handheld, No IMU | University of Bonn | [KISS-ICP: In Defense of Point-to-Point ICP](https://arxiv.org/abs/2209.15397) | RA-L 2023 | [github](https://github.com/PRBonn/kiss-icp) |
| 2022-08-25 | Candidate, Rolling-Shutter VIO, Continuous Time, Online Line-Delay Calibration | Zhejiang University | [Ctrl-VIO: Continuous-Time Visual-Inertial Odometry for Rolling Shutter Cameras](https://arxiv.org/abs/2208.12008) | arXiv | [github](https://github.com/APRIL-ZJU/Ctrl-VIO) |
| 2022-08-24 | Candidate, Dynamic-Scene VIO, IMU-Guided Outlier Rejection | KAIST | [DynaVINS: A Visual-Inertial SLAM for Dynamic Environments](https://arxiv.org/abs/2208.11500) | RA-L 2022 | [github](https://github.com/url-kaist/dynaVINS) |
| 2022-02-18 | Candidate, Multi-Camera VIO, Loop Closure | Imperial College London | [OKVIS2: Realtime Scalable Visual-Inertial SLAM with Loop Closure](https://arxiv.org/abs/2202.09199) | arXiv | [github](https://github.com/ethz-mrl/okvis2) |
| 2022-01-11 | Candidate, Monocular VIO, Robust IMU Initialization, Photometric BA | Technical University of Munich | [DM-VIO: Delayed Marginalization Visual-Inertial Odometry](https://arxiv.org/abs/2201.04114) | RA-L 2022 | [github](https://github.com/lukasvst/dm-vio) |
| 2021-09-10 | Candidate, LVIO, Photometric Fusion, Dense Mapping | HKU | [R3LIVE: A Robust, Real-time, RGB-colored, LiDAR-Inertial-Visual Tightly-coupled State Estimation and Mapping Package](https://arxiv.org/abs/2109.07982) | ICRA 2022 | [github](https://github.com/hku-mars/r3live) |
| 2021-08-24 | Candidate, Deep Visual SLAM, Mono/Stereo/RGB-D | Princeton | [DROID-SLAM: Deep Visual SLAM for Monocular, Stereo, and RGB-D Cameras](https://arxiv.org/abs/2108.10869) | NeurIPS 2021 | [github](https://github.com/princeton-vl/DROID-SLAM) |
| 2021-07-14 | Candidate, Direct LIO, Solid-State LiDAR, Handheld | HKU | [FAST-LIO2: Fast Direct LiDAR-Inertial Odometry](https://arxiv.org/abs/2107.06829) | T-RO 2022 | [github](https://github.com/hku-mars/FAST_LIO) |
| 2021-04-22 | Candidate, LVIO, Failure-Tolerant Fusion | Stevens Institute of Technology | [LVI-SAM: Tightly-coupled Lidar-Visual-Inertial Odometry via Smoothing and Mapping](https://arxiv.org/abs/2104.10831) | ICRA 2021 | [github](https://github.com/TixiaoShan/LVI-SAM) |
| 2020-07-23 | Candidate, Visual/Inertial SLAM, Fisheye, Multi-Map | University of Zaragoza | [ORB-SLAM3: An Accurate Open-Source Library for Visual, Visual-Inertial and Multi-Map SLAM](https://arxiv.org/abs/2007.11898) | T-RO 2021 | [github](https://github.com/UZ-SLAMLab/ORB_SLAM3) |
| 2020-07-01 | Candidate, Factor-Graph LIO, Loop Closure | Stevens Institute of Technology | [LIO-SAM: Tightly-coupled Lidar Inertial Odometry via Smoothing and Mapping](https://arxiv.org/abs/2007.00258) | IROS 2020 | [github](https://github.com/TixiaoShan/LIO-SAM) |
| 2020 | Candidate, Filter VIO, Mono/Stereo, Online Calibration | University of Delaware | [OpenVINS: A Research Platform for Visual-Inertial Estimation](https://pgeneva.com/downloads/papers/Geneva2020ICRA.pdf) | ICRA 2020 | [docs](https://docs.openvins.com/) / [github](https://github.com/rpng/open_vins) |
| 2019-10-01 | Candidate, AprilTag SLAM, Fiducial Anchors, Multi-Camera Calibration | University of Pennsylvania | [TagSLAM: Robust SLAM with Fiducial Markers](https://arxiv.org/abs/1910.00679) | arXiv | [github](https://github.com/berndpfrommer/tagslam) |
| 2019-06 | Candidate, Direct RGB-D SLAM, Dense Bundle Adjustment, Sync Diagnostics | ETH Zurich | [BAD SLAM: Bundle Adjusted Direct RGB-D SLAM](https://openaccess.thecvf.com/content_CVPR_2019/html/Schops_BAD_SLAM_Bundle_Adjusted_Direct_RGB-D_SLAM_CVPR_2019_paper.html) | CVPR 2019 | [github](https://github.com/ETH3D/badslam) |
| 2019-04-13 | Candidate, VIO Mapping, Non-Linear Factor Recovery, Calibration Tools | Technical University of Munich | [Visual-Inertial Mapping with Non-Linear Factor Recovery](https://arxiv.org/abs/1904.06504) | RA-L 2020 | [github](https://github.com/VladyslavUsenko/basalt) |
| 2017-08-13 | Candidate, Monocular VIO, Loop Closure, iOS | HKUST | [VINS-Mono: A Robust and Versatile Monocular Visual-Inertial State Estimator](https://arxiv.org/abs/1708.03852) | T-RO 2018 | [github](https://github.com/HKUST-Aerial-Robotics/VINS-Mono) |
| 2016-04-05 | Candidate, RGB-D Global Pose Optimization, Relocalization, Dense Fusion | Stanford | [BundleFusion: Real-time Globally Consistent 3D Reconstruction using On-the-fly Surface Re-integration](https://arxiv.org/abs/1604.01093) | TOG 2017 | [github](https://github.com/niessner/BundleFusion) |
| 2013 | Candidate, Camera-IMU Spatiotemporal Calibration, Multi-Camera Calibration | ETH Zurich | [Unified Temporal and Spatial Calibration for Multi-Sensor Systems](https://www.research-collection.ethz.ch/handle/20.500.11850/81865) | IROS 2013 | [github](https://github.com/ethz-asl/kalibr) |

### Action Spaces

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-26 | Camera-Frame Anchor Motion, Shared Geometry, Embodiment-Specific Kinematic Translation | Xiaomi Embodied Intelligence | [UCAG-P](https://arxiv.org/abs/2608.26058) | arXiv | [project](https://public-bots.github.io/UCAG-P) / [github](https://github.com/Public-BOTs/UCAG-P) |
| 2026-08-06 | Native Action Experts, Embodiment Metadata, Dynamics Priors | HKUST (Guangzhou) | [DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation](https://arxiv.org/abs/2608.06374) | arXiv | [project](https://livfour.github.io/DyPES-VLA_RELEASE/) |
| 2026-08-06 | Camera-Frame Chunk-Relative EE Actions, Dual Alignment | Joy Future Academy, JD | [JoyAI-RA 0.5: Scaling Robot Manipulation Learning via Dual Action Alignment](https://arxiv.org/abs/2608.05674) | arXiv | [project](https://joyai-ra-05.github.io/) |
| 2026-08-05 | Visual Affordance, Grasp Pose, Trajectory | University of Tokyo | [VLAff: Vision-Language-Affordance Model for Unified Actionable Affordances](https://arxiv.org/abs/2608.05215) | IROS 2026 | [project](https://ojh6404.github.io/) |
| 2026-07-29 | 3D Contact-Point Trajectory, Embodiment-Agnostic, Human+Robot | University of Bonn | [ContactFlow: A Video Action Conditioning That Transfers Across Embodiments](https://arxiv.org/abs/2607.26579) | arXiv | [paper](https://arxiv.org/abs/2607.26579) |
| 2026-07-03 | Canonical Sphere Deformation, Cascade IK | UT Dallas | [Unified Hand Action Space](https://arxiv.org/abs/2607.03570) | arXiv / RSS 2026 Workshop | [project](https://irvlutd.github.io/UHAS/) |
| 2026-06-17 | Head-Hand Targets, Latent Whole-Body Controller | SJTU | [HALOMI](https://arxiv.org/abs/2606.18772) | arXiv | [project](https://halomi-humanoid.github.io/) |
| 2026-06-15 | Camera-Space Actions, Morphology Conditioning | ACE Robotics | [ACE-Ego-0](https://arxiv.org/abs/2606.17200) | arXiv | [github](https://github.com/ACERobotics-VLA/ACE-Ego-0) |
| 2026-06-11 | Cartesian Policy, Joint-Space Guidance | Tsinghua | [EmbodiSteer](https://arxiv.org/abs/2606.12965) | arXiv | [paper](https://arxiv.org/abs/2606.12965) |
| 2026-06-11 | EE Pose Chunks, Contact Force | Georgia Tech | [WT-UMI](https://wt-umi.github.io/WTUMI/) | arXiv | [paper](https://arxiv.org/abs/2606.13232) / [project](https://wt-umi.github.io/WTUMI/) |
| 2026-06-08 | 6-DoF EE, Gripper Aperture | AIRoA | [YUBI](https://yubi.airoa.io/) | Dataset | [paper](https://arxiv.org/abs/2606.10244) / [project](https://yubi.airoa.io/) |
| 2026-06-04 | Hand-Frame EE, Hand Commands | Peking University | [RealDexUMI](https://research.beingbeyond.com/realdexumi) | arXiv | [paper](https://arxiv.org/abs/2606.06033) / [project](https://research.beingbeyond.com/realdexumi) |
| 2026-05-20 | SE(2) Base, SE(3) Hand | Zhejiang University | [Mobile UMI](https://arxiv.org/abs/2605.20894) | arXiv | [paper](https://arxiv.org/abs/2605.20894) |
| 2026-05-05 | Sparse Keypoints, Whole-Body Retargeting | BAAI | [BifrostUMI](https://arxiv.org/abs/2605.03452) | arXiv | [project](https://baai-aether.github.io/BifrostUMI/) |
| 2026-04-12 | Virtual Target Pose, Force-Aware Execution | BAAI | [OmniUMI](https://arxiv.org/abs/2604.10647) | arXiv | [paper](https://arxiv.org/abs/2604.10647) |
| 2026-03-06 | SE(2) Step Velocity + Isomorphic Arm Joint Deltas | Tsinghua University | [SuperSuit](https://arxiv.org/abs/2603.06280) | arXiv | [paper](https://arxiv.org/abs/2603.06280) |
| 2025-11-29 | One-to-One Exoskeleton-to-Hand Joint Mapping | Shanghai Jiao Tong University | [MILE](https://arxiv.org/abs/2512.00324) | arXiv | [project](https://sites.google.com/view/mile-system/home) |
| 2025-10-31 | 29D Action/State, Head Retargeting | UC Berkeley | [EgoMI](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-10-02 | EE Trajectory, Controller-Guided Diffusion | CMU | [UMI-on-Air](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2025-09-23 | 6-DoF EE, Parallel Gripper | GIST | [ManipForce](https://sites.google.com/view/manipforce/) | Dataset | [project](https://sites.google.com/view/manipforce/) |
| 2025-05-28 | DexHand, Human-Hand Interface | Stanford | [DexUMI](https://umi-data.github.io/) | Dataset | [data](https://umi-data.github.io/) |
| 2025-04-06 | Tool-Centric Task-Space Actions, View-Invariant | UIUC | [Tool-as-Interface](https://arxiv.org/abs/2504.04612) | CoRL 2025 | [project](https://tool-as-interface.github.io/) |
| 2024-11-06 | Handheld-Gripper Space, Motion-Invariant Loss, IK Retargeting | UT Austin | [LEGATO](https://arxiv.org/abs/2411.03682) | RA-L 2025 | [project](https://ut-hcrl.github.io/LEGATO/) |
| 2024-02-15 | Relative Trajectory, 6-DoF, Hardware-Agnostic | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) |

### Data Formats / Storage

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-28 | 6 Views, LeRobot v3, Parquet, MP4 | Simple AI | [HiFi-UMI-2K](https://huggingface.co/datasets/simple-world-lab/HiFi-UMI-2K) | Dataset / arXiv | [paper](https://arxiv.org/abs/2607.25895) / [project](https://cloud.simpleai.tech/simple-world-lab/hifi-umi/) |
| 2026-07-23 | Unified Trajectories, RGB-D, Task Snapshots | Axis Robotics | [AXIS](https://arxiv.org/abs/2607.21588) | Dataset / Benchmark | [project](https://axisaiorg.github.io/AXIS-V1/) |
| 2026-07-02 | Training-Ready Rollouts, Full Logs, Replay Viewer | Beihang University | [EVA-Client](https://arxiv.org/abs/2607.02646) | Framework / arXiv | [github](https://github.com/Noietch/EVA-CLIENT) |
| 2026-06-29 | iPhone RGB+LiDAR, Proprio, Bimanual | Stanford | [Behavior Prompting Policy: Demonstrations as Prompts for Manipulation](https://arxiv.org/abs/2606.30457) | Dataset / arXiv | [project](https://behavior-prompting.github.io/) / [iPhUMI](https://github.com/real-stanford/iPhUMI) |
| 2026-06-16 | HuggingFace, NPZ, Four Embodiments | Rice University | [EgoInfinity](https://huggingface.co/datasets/Rice-RobotPI-Lab/egoinfinity) | Dataset | [paper](https://arxiv.org/abs/2606.17385) / [github](https://github.com/Rice-RobotPI-Lab/EgoInfinity) |
| 2026-06-12 | Lance, LeRobot v3, 30Hz, 18.8TB | Tencent Robotics X | [Hy-Embodied-0.5-VLA-Data](https://huggingface.co/datasets/tencent/Hy-Embodied-0.5-VLA-Data) | Dataset / VLA | [paper](https://arxiv.org/abs/2606.14409) / [github](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) |
| 2026-06-09 | HuggingFace, Benchmark Dataset | Soochow University | [UMI-Bench 1.0](https://umibenchmark.github.io/) | Dataset / Benchmark | [paper](https://arxiv.org/abs/2606.10382) / [dataset](https://huggingface.co/datasets/UMIbenchmark/UMI-Benchmark-v1) |
| 2026-06-08 | LeRobot, 30Hz, 1.20M Episodes | AIRoA | [YUBI](https://yubi.airoa.io/) | Dataset | [paper](https://arxiv.org/abs/2606.10244) / [project](https://yubi.airoa.io/) |
| 2026-06-03 | UMI-VQA, HuggingFace, Validated Trajectories | TeleAI | [VISTA](https://tele-umi-vista.github.io/) | Dataset / VLA | [paper](https://arxiv.org/abs/2606.04708) / [dataset](https://huggingface.co/collections/TeleEmbodied/vista) |
| 2026-05-24 | Raw Aria, MPS, Preprocessed Labels | University of Maryland | [HumanEgo](https://huggingface.co/datasets/Leo-TX/HumanEgo) | Dataset | [paper](https://arxiv.org/abs/2605.24934) / [github](https://github.com/TX-Leo/HumanEgo) |
| 2026-05-12 | Common Observation Schema, Format-Agnostic I/O | Carnegie Mellon University | [RIO](https://arxiv.org/abs/2605.11564) | RSS 2026 / Framework | [project](https://robot-i-o.github.io/) / [github](https://github.com/robot-i-o/rio) |
| 2026-04-08 | HuggingFace, MP4, CSV Trajectories | Fudan University | [TAMEn](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) | Dataset | [paper](https://arxiv.org/abs/2604.07335) / [github](https://github.com/OpenDriveLab/TAMEn) |
| 2025-12-31 | HuggingFace, 789,772 Demos, Bimanual+Tactile | GenRobot | [GenRobot 10Kh-RealOmin OpenData](https://huggingface.co/datasets/genrobot2025/10Kh-RealOmin-OpenData) | Dataset | [index](https://umi-data.github.io/) |
| 2025-10-09 | LeRobot, Large-Scale Household | Shanghai AI Lab | [FastUMI-100K](https://github.com/MrKeee/FastUMI-100K) | Dataset | [github](https://github.com/MrKeee/FastUMI-100K) |
| 2025-09-23 | HDF5, Force/Torque | GIST | [ManipForce](https://sites.google.com/view/manipforce/) | Dataset | [project](https://sites.google.com/view/manipforce/) |
| 2025-06-02 | Visuo-Tactile, Trajectories, Open Dataset | Shanghai Innovation Institute | [FreeTacMan](https://arxiv.org/abs/2506.01941) | Dataset | [project](https://opendrivelab.com/FreeTacMan) / [github](https://github.com/OpenDriveLab/FreeTacMan) |
| 2024-11-06 | HDF5, Sim2Real | UT Austin | [LEGATO](https://ut-hcrl.github.io/LEGATO/) | Dataset | [project](https://ut-hcrl.github.io/LEGATO/) |
| 2024-10-24 | Zarr, MP4, Scaling | Tsinghua | [Data Scaling Laws](https://data-scaling-laws.github.io/) | Dataset | [project](https://data-scaling-laws.github.io/) |
| 2024-09-29 | HDF5, UMI Conversion Tools, 22 Tasks | Shanghai AI Lab | [FastUMI](https://arxiv.org/abs/2409.19499) | Dataset / arXiv | [data](https://huggingface.co/datasets/IPEC-COMMUNITY/FastUMI-Data) / [github](https://github.com/YdingTeam/FastUMI_Data) |
| 2024-02-15 | Zarr, MP4, Replay Buffer | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [data](https://umi-data.github.io/) |

### Deployment / System Constraints

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-06 | Cross-Embodiment Control, Native Action Experts, Dynamics Priors | HKUST (Guangzhou) | [DyPES-VLA: Learning Shared Dynamics Priors and Embodiment-Specific Control for Cross-Embodiment Manipulation](https://arxiv.org/abs/2608.06374) | arXiv | [project](https://livfour.github.io/DyPES-VLA_RELEASE/) |
| 2026-08-06 | World-Model Evaluation, Held-Out Embodiments, OOD Generalization | Chinese Academy of Sciences | [XEWorld: Can Action-Conditioned World Models Generalize to Unseen Robot Embodiments?](https://arxiv.org/abs/2608.05799) | arXiv | [paper](https://arxiv.org/abs/2608.05799) |
| 2026-08-06 | Interactive World Model, URDF Actions, Human Teleoperation | Tsinghua University | [GeniWorld: A Generalizable Interactive World Model for Robotic Manipulation via Visual Actions](https://arxiv.org/abs/2608.06332) | arXiv | [project](https://chenghaogu.github.io/GeniWorld/) |
| 2026-08-06 | Egocentric/Simulation/Robot Fusion, Latent+Explicit Alignment | Joy Future Academy, JD | [JoyAI-RA 0.5: Scaling Robot Manipulation Learning via Dual Action Alignment](https://arxiv.org/abs/2608.05674) | arXiv | [project](https://joyai-ra-05.github.io/) |
| 2026-07-31 | Contact-Rich Teleoperation, Task-Manifold Impedance, Force Safety | University of Tokyo | [MDIR: A Task-Manifold Impedance Retargeting Method for Contact-Rich Teleoperation](https://arxiv.org/abs/2607.29271) | arXiv | [paper](https://arxiv.org/abs/2607.29271) |
| 2026-07-22 | Recovery Gate, Corrective Intent, Failure Starts | Fudan University | [EgoRecovery: Acquiring Failure Recovery Ability Through Human Recovery Demonstration](https://arxiv.org/abs/2607.19745) | arXiv | [paper](https://arxiv.org/abs/2607.19745) |
| 2026-07-21 | Onboard Compute, Modular Hardware, Mobile Deployment | Stanford | [ModPack: An Extensible Teleoperation Interface for Bimanual Mobile Manipulation](https://arxiv.org/abs/2607.19479) | arXiv | [project](https://modpack-robotics.github.io/) |
| 2026-07-19 | Asynchronous Modalities, Latency-Aware Fusion | SJTU | [Asynchronous Multimodal Diffusion Policy Composition via Latency-Aware Guidance Fusion](https://arxiv.org/abs/2607.17257) | arXiv | [project](https://lag-fusion.github.io/) |
| 2026-07-02 | Collect/Eval Workflows, Async Inference, Real Robots | Beihang University | [EVA-Client: A Unified Data Collection, Inference, and Deployment Framework for Embodied Policies on Real Robots](https://arxiv.org/abs/2607.02646) | arXiv | [github](https://github.com/Noietch/EVA-CLIENT) |
| 2026-06-25 | Observed vs Desired Actions, DM-UMI, Contact | RAI Institute | [Bridging Handheld and Teleoperated Supervision for Contact-Rich Manipulation via State-Gated Experts](https://arxiv.org/abs/2606.26603) | arXiv | [project](https://nperi-rai.github.io/bridge-project/) |
| 2026-06-22 | Wrist Masking, Hardware Change, Zero-Shot Transfer | Stanford | [Cloak: Zero-Shot Cross-Embodiment Manipulation by Masking the End-Effector from the VLA](https://arxiv.org/abs/2606.22836) | arXiv | [project](https://tml.stanford.edu/cloak/) |
| 2026-06-12 | Real-World Stack, Async Inference, UMI | Tencent Robotics X | [Hy-Embodied-0.5-VLA: From Vision-Language-Action Models to a Real-World Robot Learning Stack](https://arxiv.org/abs/2606.14409) | arXiv | [project](https://tairos.tencent.com/openSourceModels/hy-embodied-0.5-vla) / [github](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) / [data](https://huggingface.co/datasets/tencent/Hy-Embodied-0.5-VLA-Data) |
| 2026-06-11 | Joint-Space Guidance, Collision-Aware Deployment | Tsinghua | [EmbodiSteer: Steering Embodiment-Agnostic Visuomotor Policies with Joint-Space Guidance for Zero-Shot Cross-Embodiment Deployment](https://arxiv.org/abs/2606.12965) | arXiv | [paper](https://arxiv.org/abs/2606.12965) |
| 2026-05-12 | Real-Time I/O, Multi-Hardware, Async Policy Inference | Carnegie Mellon University | [RIO: Flexible Real-Time Robot I/O for Cross-Embodiment Robot Learning](https://arxiv.org/abs/2605.11564) | RSS 2026 | [project](https://robot-i-o.github.io/) / [github](https://github.com/robot-i-o/rio) |
| 2026-04-08 | Online Validation, Recovery Teleop, Data Flywheel | Fudan University | [TAMEn: Tactile-Aware Manipulation Engine for Closed-Loop Data Collection in Contact-Rich Tasks](https://arxiv.org/abs/2604.07335) | arXiv | [project](https://opendrivelab.com/TAMEn) / [github](https://github.com/OpenDriveLab/TAMEn) / [dataset](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) |
| 2025-10-02 | Controller Guidance, Embodiment Gap, Aerial | CMU | [UMI-on-Air: Embodiment-Aware Guidance for Embodiment-Agnostic Visuomotor Policies](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2024-07-14 | Mobile Controller, Whole-Body, Legged | Stanford | [UMI on Legs: Making Manipulation Policies Mobile with a Manipulation-Centric Whole-body Controller](https://arxiv.org/abs/2407.10353) | CoRL 2024 | [github](https://github.com/real-stanford/umi-on-legs) |
| 2024-02-15 | Latency Matching, Relative Actions, Calibration | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) / [github](https://github.com/real-stanford/universal_manipulation_interface) |

### Evaluation / Surveys / Notes

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-08-23 | L0-L3 Imitation Gap, Functional Substitution, Blind A/B Arena, 15 Model Variants | The University of Hong Kong | [The Imitator Game](https://arxiv.org/abs/2608.22301) | Dataset / Benchmark | [project](https://imitator-game.github.io/) / [github](https://github.com/imitator-game/The-Imitator-Game) / [data](https://imitator-game.github.io/data.html) |
| 2026-08-17 | Motion Coverage, Interaction Grounding, Object Consistency | National University of Singapore | [HiPHI](https://arxiv.org/abs/2608.16222) | Dataset / Benchmark | [paper](https://arxiv.org/abs/2608.16222) |
| 2026-08-12 | Human-to-Robot Editing, 26 URDFs, 11 Baselines | Inspire Robots / SJTU | [HandEdit](https://arxiv.org/abs/2608.12122) | Dataset / Benchmark | [project](https://handedit.github.io/) |
| 2026-08-06 | Cross-Embodiment Benchmark, Held-Out Robots, Dynamics vs Appearance | Chinese Academy of Sciences | [XEWorld: Can Action-Conditioned World Models Generalize to Unseen Robot Embodiments?](https://arxiv.org/abs/2608.05799) | arXiv | [paper](https://arxiv.org/abs/2608.05799) |
| 2026-08-06 | World-Model Evaluator, OOD Scenes, Policy Data Generation | Tsinghua University | [GeniWorld: A Generalizable Interactive World Model for Robotic Manipulation via Visual Actions](https://arxiv.org/abs/2608.06332) | arXiv | [project](https://chenghaogu.github.io/GeniWorld/) |
| 2026-08-05 | Affordance Benchmark, 204K Episodes, 3D Action Labels | University of Tokyo | [VLAff: Vision-Language-Affordance Model for Unified Actionable Affordances](https://arxiv.org/abs/2608.05215) | IROS 2026 | [project](https://ojh6404.github.io/) |
| 2026-07-30 | Cross-Embodiment Benchmark, Behavior-Aligned Representations, Sim-to-Real | Stanford | [Cross-Embodiment Transfer via Behavior-Aligned Representations](https://arxiv.org/abs/2607.27549) | ICRA 2026 | [project](https://bar-x-anon.github.io/) |
| 2026-07-23 | Growable Benchmark, Held-Out Tasks, Data Scaling | Axis Robotics | [AXIS: A Growable Community-Driven Data Engine for Scalable Robot Manipulation](https://arxiv.org/abs/2607.21588) | Dataset / Benchmark | [project](https://axisaiorg.github.io/AXIS-V1/) |
| 2026-06-12 | Online Data Guidance, Coverage, Data Quality | SJTU | [EgoGuide: Egocentric Guidance for Efficient Robot-Free Demonstration Collection and Learning](https://arxiv.org/abs/2606.14665) | arXiv | [project](https://silicx.github.io/EgoGuide/) |
| 2026-06-09 | Real-Robot Benchmark, UMI Data, Reproducibility | Soochow University | [UMI-Bench 1.0: An Open and Reproducible Real-World Benchmark for Tabletop Robotic Manipulation with UMI Data](https://arxiv.org/abs/2606.10382) | arXiv / Benchmark | [project](https://umibenchmark.github.io/) / [dataset](https://huggingface.co/datasets/UMIbenchmark/UMI-Benchmark-v1) / [models](https://huggingface.co/UMIbenchmark/UMI-Benchmark-v1-checkpoints) |
| 2026-06-03 | Physical Validation, Fisheye Alignment, VLA | TeleAI | [VISTA: Vision-Grounded and Physics-Validated Adaptation of UMI data for VLA Training](https://arxiv.org/abs/2606.04708) | arXiv | [project](https://tele-umi-vista.github.io/) / [github](https://github.com/TeleHuman/umi-vista) |
| 2026-03-17 | UMI Ergonomics, Gripper Geometry, Demonstration Quality | UMass Amherst | [Influence of Gripper Design on Human Demonstration Quality for Robot Learning](https://arxiv.org/abs/2603.17189) | ICRA 2026 | [paper](https://arxiv.org/abs/2603.17189) |
| 2025-10-02 | UMI-Ability, Embodiment Gap, Benchmark Suite | CMU | [UMI-on-Air: Embodiment-Aware Guidance for Embodiment-Agnostic Visuomotor Policies](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2024-10-24 | Scaling Laws, Multi-Env, Data Efficiency | Tsinghua | [Data Scaling Laws](https://data-scaling-laws.github.io/) | Dataset / Study | [project](https://data-scaling-laws.github.io/) |
| 2024-02-15 | Zero-Shot, Cross-Platform, Long-Horizon | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) |
| 2024-02-15 | Community Taxonomy, Family Index | Stanford | [UMI Data Community Site](https://umi-data.github.io/) | Website | [page](https://umi-data.github.io/) |

## Citation

Contributions are welcome!

Please check `AGENTS.md` before adding new entries, and use [Conventional Commits](https://www.conventionalcommits.org) for commit messages.

## Acknowledgement

This repo is inspired by [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D).
