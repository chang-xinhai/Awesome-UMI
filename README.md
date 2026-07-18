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
- **UMI Taxonomy**: embodiments, modalities, data formats, deployment-facing notes, and survey-style resources

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
| Build on UMI hardware/data collection | [Universal Manipulation Interface Codebase](https://github.com/real-stanford/universal_manipulation_interface), [UMI-FT](https://github.com/real-stanford/UMI-FT), [exUMI](https://silicx.github.io/exUMI/) |
| Explore dexterous UMI-style extensions | [DexUMI](https://arxiv.org/abs/2505.21864), [DexWild](https://dexwild.github.io/), [DexCap](https://arxiv.org/abs/2403.07788) |
| Train UMI-relevant policies | [Hy-Embodied-0.5-VLA](https://arxiv.org/abs/2606.14409), [Diffusion Policy](https://diffusion-policy.cs.columbia.edu/), [ACT / ALOHA](https://tonyzhaozh.github.io/aloha/), [OpenVLA](https://openvla.github.io/) |
| Compare modalities and formats | [UMI Taxonomy](#umi-taxonomy), [UMI Data Community Site](https://umi-data.github.io/) |

## News

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
| 2026-07-10 | Single-View Human Demo, Physics Validation, Retargeting | KU Leuven | [DemoBridge: A Simulation-in-the-Loop Toolkit for Single-View Human Demonstration Retargeting](https://arxiv.org/abs/2607.09519) | arXiv | [gitlab](https://gitlab.kuleuven.be/u0123974/demo-bridge) |
| 2026-07-09 | FPV Video, Mixed Reality, Full-Hand Retargeting | Skoltech | [AgenticFocus: Object-Preserving Mixed Reality Synthesis from Human FPV Video for Dexterous Humanoid Learning](https://arxiv.org/abs/2607.08857) | arXiv | [paper](https://arxiv.org/abs/2607.08857) |
| 2026-07-07 | Digital Teleoperation, Hand-Pose Stream, World Model | DAMO Academy | [RynnWorld-Teleop: An Action-Conditioned World Model for Digital Teleoperation](https://arxiv.org/abs/2607.06558) | arXiv | [project](https://alibaba-damo-academy.github.io/RynnWorld-Teleop.github.io/) / [github](https://github.com/alibaba-damo-academy/RynnWorld-Teleop) / [model](https://huggingface.co/Alibaba-DAMO-Academy/RynnWorld-Teleop) |
| 2026-06-25 | Humanoid, VR-UMI, Whole-Body | BAAI | [HumanoidUMI: Bridging Robot-Free Demonstrations and Humanoid Whole-Body Manipulation](https://arxiv.org/abs/2606.27239) | arXiv | [paper](https://arxiv.org/abs/2606.27239) |
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
| 2026-04-15 | 3D Perception, LiDAR, UMI Extension | HKU | [UMI-3D: Extending Universal Manipulation Interface from Vision-Limited to 3D Spatial Perception](https://arxiv.org/abs/2604.14089) | arXiv | [project](https://umi-3d.github.io/) / [dataset](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) / [policy](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Policy) |
| 2026-03-27 | Underwater, Robot-Free, Domain Transfer | Stanford | [UMI-Underwater: Learning Underwater Manipulation without Underwater Teleoperation](https://arxiv.org/abs/2603.27012) | arXiv | [project](https://umi-under-water.github.io/) / [github](https://github.com/umi-under-water/UMI_underwater) |
| 2026-03-10 | Portable Teleoperation, Suitcase, Plug-and-Play | UIUC | [TRIP-Bag: A Portable Teleoperation System for Plug-and-Play Robotic Arms and Leaders](https://arxiv.org/abs/2603.09226) | arXiv | [project](https://uiuckimlab.github.io/TRIP-Bag-pages/) |
| 2025-11-12 | Egocentric Point Cloud, Cross-Embodiment | Tsinghua SIGS | [UMIGen: A Unified Framework for Egocentric Point Cloud Generation and Cross-Embodiment Robotic Imitation Learning](https://arxiv.org/abs/2511.09302) | arXiv | [paper](https://arxiv.org/abs/2511.09302) |
| 2025-10-31 | Egocentric, Active Vision, Whole-Body | UC Berkeley | [EgoMI: Learning Active Vision and Whole-Body Manipulation from Egocentric Human Demonstrations](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-10-02 | Active Perception, VR, Robot-Free | Shanghai University | [ActiveUMI: Robotic Manipulation with Active Perception from Robot-Free Human Demonstrations](https://arxiv.org/abs/2510.01607) | arXiv | [project](https://activeumi.github.io/) |
| 2025-09-18 | Tactile, Robot Teaching, Single-Arm | SJTU | [exUMI: Extensible Robot Teaching System with Action-aware Task-agnostic Tactile Representation](https://silicx.github.io/exUMI/) | CoRL 2025 | [project](https://silicx.github.io/exUMI/) / [github](https://github.com/silicx/exUMI) / [paper](https://arxiv.org/abs/2509.14688) |
| 2025-07-05 | Human-Hand, Robot-Free, Policy Learning | Peking University | [RwoR: Generating Robot Demonstrations from Human Hand Collection for Policy Learning without Robot](https://arxiv.org/abs/2507.03930) | IROS 2025 | [project](https://rwor.github.io/) |
| 2024-10-31 | Egocentric, Imitation, Human-First | Georgia Tech | [EgoMimic: Scaling Imitation Learning via Egocentric Video](https://arxiv.org/abs/2410.24221) | arXiv | [project](https://egomimic.github.io/) / [github](https://github.com/SimarKareer/EgoMimic) |
| 2024-07-01 | Teleoperation, Immersive, Active Visual Feedback | UC San Diego | [Open-TeleVision: Teleoperation with Immersive Active Visual Feedback](https://arxiv.org/abs/2407.01512) | CoRL 2024 | [github](https://github.com/OpenTeleVision/TeleVision) |
| 2024-03-12 | Teleoperation, VR, Bimanual | NYU | [OPEN TEACH: A Versatile Teleoperation System for Robotic Manipulation](https://arxiv.org/abs/2403.07870) | arXiv | [github](https://github.com/aadhithya14/Open-Teach) |
| 2024-02-15 | Handheld Interface, Bimanual, Portable | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) / [github](https://github.com/real-stanford/universal_manipulation_interface) |

### Dexterous Hand / DexHand

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-09 | Calibration-Free, Hand Retargeting, Teleoperation | Noematrix | [AnyDexRT: Calibration-Free Dexterous Hand Retargeting with Few-Shot Human Guidance](https://arxiv.org/abs/2607.08341) | arXiv / RSS 2026 Workshop | [project](https://chenxi-wang.github.io/projects/anydexrt/) |
| 2026-07-08 | Low-Jitter Retargeting, Real-Time, User Study | ETH Zurich | [Smooth Operator: A Real-Time Sampling-Based Algorithm for Kinematic Hand Retargeting](https://arxiv.org/abs/2607.07491) | arXiv | [project](https://mimicrobotics.github.io/smooth-operator/) |
| 2026-06-17 | Human Video, Robot-Complete Actions, DexHand | UC Berkeley | [Do as I Do: Dexterous Manipulation Data from Everyday Human Videos](https://arxiv.org/abs/2606.19333) | arXiv | [project](https://do-as-i-do.com/) / [github](https://github.com/malik-group/do-as-i-do) |
| 2026-06-10 | Egocentric Video, Digital Twin, Zero-Shot Policy | Georgia Tech | [EgoEngine: From Egocentric Human Videos to High-Fidelity Dexterous Robot Demonstrations](https://arxiv.org/abs/2606.12604) | arXiv / RSS 2026 Workshop | [project](https://egoengine.github.io/) |
| 2026-06-08 | Bidigital Gripper, Bimanual, DexHand | AIRoA | [YUBI: Yielding Universal Bidigital Interface for Bimanual Dexterous Manipulation at Scale](https://arxiv.org/abs/2606.10244) | arXiv / ICRA 2026 Workshop | [project](https://yubi.airoa.io/) / [hardware](https://github.com/toyota/yubi-hw) / [software](https://github.com/airoa-org/yubi-sw) |
| 2026-06-04 | Wearable DexHand, Tactile, Cross-Embodiment | Peking University | [RealDexUMI: A Wearable Universal Manipulation Interface for Dexterous Robot Learning](https://arxiv.org/abs/2606.06033) | arXiv | [project](https://research.beingbeyond.com/realdexumi) |
| 2026-04-14 | DexHand, Interface, Data Quality | X Square Robot | [XRZero-G0: Pushing the Frontier of Dexterous Robotic Manipulation with Interfaces, Quality and Ratios](https://arxiv.org/abs/2604.13001) | arXiv | [github](https://github.com/X-Square-Robot/XRZero-G0) |
| 2025-05-28 | DexHand, Wearable, Cross-Hand | Stanford | [DexUMI: Using Human Hand as the Universal Manipulation Interface for Dexterous Manipulation](https://arxiv.org/abs/2505.21864) | CoRL 2025 | [data](https://umi-data.github.io/) |
| 2025-05-12 | DexHand, In-the-Wild, Human-to-Robot | CMU | [DexWild](https://dexwild.github.io/) | RSS 2025 | [project](https://dexwild.github.io/) |
| 2024-03-12 | DexHand, Mocap, Data Collection | Stanford | [DexCap: Scalable and Portable Mocap Data Collection System for Dexterous Manipulation](https://arxiv.org/abs/2403.07788) | arXiv | [github](https://github.com/j96w/DexCap) |

### Multimodal / Force / Tactile

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-24 | Wrist-Worn sEMG, Per-Finger Force, Robot-Free | Amazon FAR | [ForceBand: Learning Forceful Manipulation with sEMG](https://arxiv.org/abs/2606.26093) | arXiv | [project](https://forceband-emg.github.io/) |
| 2026-06-15 | Tactile Glove, 22-DoF, 2048 Taxels | Carnegie Mellon University | [ART-Glove: Articulated Tactile Glove for Contact-Grounded Dexterous Interaction Capture](https://arxiv.org/abs/2606.16370) | arXiv | [project](https://linchangyi1.github.io/ART-Glove/) |
| 2026-06-11 | Whole-Body Tactile, Force-Supervised, Humanoid | Georgia Tech | [WT-UMI: Tactile-based Whole-Body Manipulation via Force-Supervised Contact-Aware Planning](https://arxiv.org/abs/2606.13232) | arXiv | [project](https://wt-umi.github.io/WTUMI/) |
| 2026-06-08 | Arm-Worn, Force, Vision-Tactile | SJTU | [AetheRock: An Arm-Worn Robot Teaching System for Force-Guided Vision-Tactile Learning](https://arxiv.org/abs/2606.09777) | arXiv | [paper](https://arxiv.org/abs/2606.09777) |
| 2026-04-12 | Multimodal, Tactile, Force/Wrench | BAAI | [OmniUMI: Towards Physically Grounded Robot Learning via Human-Aligned Multimodal Interaction](https://arxiv.org/abs/2604.10647) | arXiv | [paper](https://arxiv.org/abs/2604.10647) |
| 2026-04-08 | Visuo-Tactile, Closed-Loop, Bimanual | Fudan University | [TAMEn: Tactile-Aware Manipulation Engine for Closed-Loop Data Collection in Contact-Rich Tasks](https://arxiv.org/abs/2604.07335) | arXiv | [project](https://opendrivelab.com/TAMEn) / [github](https://github.com/OpenDriveLab/TAMEn) / [dataset](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) |
| 2026-01-21 | Tactile, Force/Torque, Contact-Rich | TU Munich | [TacUMI: A Multi-Modal Universal Manipulation Interface for Contact-Rich Tasks](https://arxiv.org/abs/2601.14550) | arXiv | [github](https://github.com/Tac-UMI/TacUMI) |
| 2026-01-15 | Force, Compliance, Contact-Rich | Stanford | [In-the-Wild Compliant Manipulation with UMI-FT](https://arxiv.org/abs/2601.09988) | ICRA 2026 | [github](https://github.com/real-stanford/UMI-FT) |
| 2025-12-10 | Tactile, Visuo-Tactile, TacThru-UMI | Peking University | [TacThru: Simultaneous Tactile-Visual Perception for Learning Multimodal Robot Manipulation](https://arxiv.org/abs/2512.09851) | RA-L | [github](https://github.com/YuyangLee/TacThru) |
| 2025-11-08 | Vision+Tactile, Fine Manipulation | Tsinghua | [ViTaMIn-B](https://chuanyune.github.io/ViTaMIn-B_page/) | arXiv | [project](https://chuanyune.github.io/ViTaMIn-B_page/) / [paper](https://arxiv.org/abs/2511.05858) |
| 2025-09-23 | Force-Guided, Wrist F/T, Contact-Rich | GIST | [ManipForce](https://sites.google.com/view/manipforce/) | ICRA 2026 | [project](https://sites.google.com/view/manipforce/) / [github](https://github.com/gist-ailab/ManipForce) |
| 2025-06-02 | Robot-Free, Visuo-Tactile, Wearable | Shanghai Innovation Institute | [FreeTacMan: Robot-free Visuo-Tactile Data Collection System for Contact-rich Manipulation](https://arxiv.org/abs/2506.01941) | ICRA 2026 | [project](https://opendrivelab.com/FreeTacMan) / [github](https://github.com/OpenDriveLab/FreeTacMan) |
| 2025-04-08 | Robot-Free, Visuo-Tactile, Contact-Rich | Tsinghua | [ViTaMIn: Learning Contact-Rich Tasks Through Robot-Free Visuo-Tactile Manipulation Interface](http://arxiv.org/abs/2504.06156) | arXiv | [project](https://chuanyune.github.io/ViTaMIn_page/) |

### In-the-Wild / Mobile / Whole-Body

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-25 | Humanoid, Whole-Body, Robot-Free | BAAI | [HumanoidUMI: Bridging Robot-Free Demonstrations and Humanoid Whole-Body Manipulation](https://arxiv.org/abs/2606.27239) | arXiv | [paper](https://arxiv.org/abs/2606.27239) |
| 2026-06-17 | Humanoid, Loco-Manipulation, Active Perception | SJTU | [HALOMI: Learning Humanoid Loco-Manipulation with Active Perception from Human Demonstrations](https://arxiv.org/abs/2606.18772) | arXiv | [project](https://halomi-humanoid.github.io/) |
| 2026-06-11 | Whole-Body, Tactile, Humanoid | Georgia Tech | [WT-UMI: Tactile-based Whole-Body Manipulation via Force-Supervised Contact-Aware Planning](https://arxiv.org/abs/2606.13232) | arXiv | [project](https://wt-umi.github.io/WTUMI/) |
| 2026-05-20 | Mobile Manipulation, Cross-View, Decoupled Kinematics | Zhejiang University | [Mobile UMI: Cross-View Diffusion Policy with Decoupled Kinematics for Mobile Manipulation](https://arxiv.org/abs/2605.20894) | arXiv | [paper](https://arxiv.org/abs/2605.20894) |
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
| 2026-06-12 | Bimanual, 2K+ Hours, Lance/LeRobot | Tencent Robotics X | [Hy-Embodied-0.5-VLA-Data](https://huggingface.co/datasets/tencent/Hy-Embodied-0.5-VLA-Data) | Dataset / VLA | [paper](https://arxiv.org/abs/2606.14409) / [github](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) / [model](https://huggingface.co/tencent/Hy-Embodied-0.5-VLA-UMI) |
| 2026-06-09 | Benchmark, 10 Tasks, HuggingFace | Soochow University | [UMI-Bench 1.0](https://umibenchmark.github.io/) | Dataset / Benchmark | [paper](https://arxiv.org/abs/2606.10382) / [dataset](https://huggingface.co/datasets/UMIbenchmark/UMI-Benchmark-v1) / [models](https://huggingface.co/UMIbenchmark/UMI-Benchmark-v1-checkpoints) |
| 2026-06-08 | Bimanual, 1.20M Episodes, LeRobot | AIRoA | [YUBI](https://yubi.airoa.io/) | Dataset | [paper](https://arxiv.org/abs/2606.10244) / [project](https://yubi.airoa.io/) / [software](https://github.com/airoa-org/yubi-sw) |
| 2026-06-03 | UMI-VQA, Fisheye, Validated Trajectories | TeleAI | [VISTA](https://tele-umi-vista.github.io/) | Dataset / VLA | [paper](https://arxiv.org/abs/2606.04708) / [github](https://github.com/TeleHuman/umi-vista) / [dataset](https://huggingface.co/collections/TeleEmbodied/vista) |
| 2026-04-15 | 3D Perception, LiDAR, UMI Extension | HKU | [UMI-3D](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) | Dataset | [paper](https://arxiv.org/abs/2604.14089) / [project](https://umi-3d.github.io/) / [dataset](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) |
| 2026-04-08 | Visuo-Tactile, MP4/CSV, Recovery Data | Fudan University | [TAMEn](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) | Dataset | [paper](https://arxiv.org/abs/2604.07335) / [project](https://opendrivelab.com/TAMEn) / [github](https://github.com/OpenDriveLab/TAMEn) |
| 2026-02-06 | Humanoid, Bimanual, Whole-Body | Tsinghua | [HuMI](https://humanoid-manipulation-interface.github.io/) | Dataset | [project](https://humanoid-manipulation-interface.github.io/) / [paper](https://arxiv.org/abs/2602.06643) |
| 2025-11-08 | Vision, Tactile, Parallel Gripper | Tsinghua | [ViTaMIn-B](https://chuanyune.github.io/ViTaMIn-B_page/) | Dataset | [project](https://chuanyune.github.io/ViTaMIn-B_page/) / [paper](https://arxiv.org/abs/2511.05858) |
| 2025-10-09 | Large-Scale, Household, LeRobot | Shanghai AI Lab | [FastUMI-100K](https://github.com/MrKeee/FastUMI-100K) | Dataset | [github](https://github.com/MrKeee/FastUMI-100K) |
| 2025-09-23 | Multi-View, Segmentation, Placement | NYU Abu Dhabi | [MV-UMI](https://mv-umi.github.io) | Dataset | [project](https://mv-umi.github.io) |
| 2025-09-18 | exUMI, Single-Arm, Tactile | SJTU | [exUMI](https://silicx.github.io/exUMI/) | Dataset | [project](https://silicx.github.io/exUMI/) |
| 2025-07-20 | In-the-Wild, Tactile, Proprio | Columbia | [Touch in the Wild](https://binghao-huang.github.io/touch_in_the_wild/) | Dataset | [project](https://binghao-huang.github.io/touch_in_the_wild/) |
| 2025-05-28 | DexHand, Force/Torque, Inspire/XHand | Stanford | [DexUMI](https://umi-data.github.io/) | Dataset | [data](https://umi-data.github.io/) |
| 2025-05-12 | DexHand, In-the-Wild, Human-to-Robot | CMU | [DexWild](https://dexwild.github.io/) | Dataset | [project](https://dexwild.github.io/) |
| 2025-04-08 | Vision, Tactile, Precision Tasks | Tsinghua | [ViTaMIn](https://chuanyune.github.io/ViTaMIn_page/) | Dataset | [project](https://chuanyune.github.io/ViTaMIn_page/) |
| 2024-11-06 | Sim2Real, HDF5, Manipulation | UT Austin | [LEGATO](https://ut-hcrl.github.io/LEGATO/) | Dataset | [project](https://ut-hcrl.github.io/LEGATO/) |
| 2024-10-24 | Scaling Laws, Zarr, MP4 | Tsinghua | [Data Scaling Laws](https://data-scaling-laws.github.io/) | Dataset | [project](https://data-scaling-laws.github.io/) |
| 2024-09-29 | Household, HDF5, Fast Collection | Shanghai AI Lab | [Fast-UMI](https://fastumi.com/) | Dataset | [project](https://fastumi.com/) |
| 2024-06-27 | Audio, In-the-Wild, Manipulation | Stanford | [ManiWAV](https://mani-wav.github.io/) | Dataset | [project](https://mani-wav.github.io/) |

### Cross-Embodiment / Large-Scale Adjacent Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-15 | Egocentric Human Video, 2,000 Hours, Retargeting Toolchain | Ant Group | [Open-AoE: An Open Egocentric Manipulation Dataset and Toolchain for Embodied Learning](https://arxiv.org/abs/2607.14183) | arXiv | [github](https://github.com/ant-research/Open-AoE) / [dataset](https://huggingface.co/datasets/inclusionAI/OpenAoE-2000h) |
| 2026-06-16 | 4D Hand-Object, Action100M, Four Robot Embodiments | Rice University | [EgoInfinity](https://arxiv.org/abs/2606.17385) | Dataset / arXiv | [project](https://rice-robotpi-lab.github.io/EgoInfinity/) / [github](https://github.com/Rice-RobotPI-Lab/EgoInfinity) / [dataset](https://huggingface.co/datasets/Rice-RobotPI-Lab/egoinfinity) |
| 2026-05-24 | Aria, 122 Recordings, Raw+MPS Annotations | University of Maryland | [HumanEgo](https://arxiv.org/abs/2605.24934) | Dataset / arXiv | [project](https://humanego-ai.github.io/) / [github](https://github.com/TX-Leo/HumanEgo) / [dataset](https://huggingface.co/datasets/Leo-TX/HumanEgo) |
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
| 2025-05-28 | DexHand, Force/Torque, Inspire/XHand | Stanford | [DexUMI](https://umi-data.github.io/) | Dataset | [data](https://umi-data.github.io/) |
| 2025-05-12 | DexHand, Human/Robot, In-the-Wild | CMU | [DexWild](https://dexwild.github.io/) | Dataset | [project](https://dexwild.github.io/) |

### Multimodal / Force-aware Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-15 | Tactile-Reactive, 100 Hours, 12 Tasks | Authors | [T-Rex](https://arxiv.org/abs/2606.17055) | Dataset / arXiv | [project](https://tactile-rex.github.io/) |
| 2026-04-15 | LiDAR, 3D Perception, Raw Recordings | HKU | [UMI-3D](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) | Dataset | [paper](https://arxiv.org/abs/2604.14089) / [project](https://umi-3d.github.io/) / [dataset](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) |
| 2026-04-08 | Visuo-Tactile, 4 Views, Trajectories | Fudan University | [TAMEn](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) | Dataset | [paper](https://arxiv.org/abs/2604.07335) / [project](https://opendrivelab.com/TAMEn) / [github](https://github.com/OpenDriveLab/TAMEn) |
| 2025-11-08 | Vision+Tactile, Wiping, Scooping | Tsinghua | [ViTaMIn-B](https://chuanyune.github.io/ViTaMIn-B_page/) | Dataset | [project](https://chuanyune.github.io/ViTaMIn-B_page/) / [paper](https://arxiv.org/abs/2511.05858) |
| 2025-09-23 | Wrist F/T, HDF5, Assembly | GIST | [ManipForce](https://sites.google.com/view/manipforce/) | Dataset | [project](https://sites.google.com/view/manipforce/) |
| 2025-07-20 | Tactile, Proprio, In-the-Wild | Columbia | [Touch in the Wild](https://binghao-huang.github.io/touch_in_the_wild/) | Dataset | [project](https://binghao-huang.github.io/touch_in_the_wild/) |
| 2025-06-02 | Visuo-Tactile, 10K Demos, 50 Tasks | Shanghai Innovation Institute | [FreeTacMan](https://arxiv.org/abs/2506.01941) | Dataset | [project](https://opendrivelab.com/FreeTacMan) / [github](https://github.com/OpenDriveLab/FreeTacMan) |
| 2025-04-08 | Vision+Tactile, Fine Manipulation | Tsinghua | [ViTaMIn](https://chuanyune.github.io/ViTaMIn_page/) | Dataset | [project](https://chuanyune.github.io/ViTaMIn_page/) |
| 2024-06-27 | Audio, Real-World, Manipulation | Stanford | [ManiWAV](https://mani-wav.github.io/) | Dataset | [project](https://mani-wav.github.io/) |

### Mobile / Whole-Body Datasets

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-02-06 | Humanoid, Pelvis, Feet, Bimanual | Tsinghua | [HuMI](https://humanoid-manipulation-interface.github.io/) | Dataset | [project](https://humanoid-manipulation-interface.github.io/) / [paper](https://arxiv.org/abs/2602.06643) |
| 2024-07-14 | Legged, Mobile, Zarr | Stanford | [UMI on Legs](https://umi-on-legs.github.io/) | Dataset | [project](https://umi-on-legs.github.io/) |

## UMI Policy

Policies and support models that are trained on UMI-like data, evaluated in adjacent settings, or commonly used as UMI-relevant baselines.

### Imitation Learning

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-14 | Single RGB-D Demo, Synthetic Augmentation, Mobile Manipulation | Carnegie Mellon University | [Worlds in One Demo: A Synthetic Data Engine for Learning Open-World Mobile Manipulation](https://arxiv.org/abs/2607.13154) | arXiv | [project](https://wanda.lecar-lab.org/) / [dataset](https://huggingface.co/datasets/LeCAR-Lab/Wanda) |
| 2026-07-08 | Egocentric Human Data, World Action Model, 3D Flow | Georgia Tech | [EgoWAM: World Action Models Beyond Pixels with In-the-Wild Egocentric Human Data](https://arxiv.org/abs/2607.08436) | arXiv | [project](https://gatech-rl2.github.io/egowam.github.io/) |
| 2026-06-25 | State-Gated Experts, Diffusion Policy, Contact-Rich | RAI Institute | [Bridging Handheld and Teleoperated Supervision for Contact-Rich Manipulation via State-Gated Experts](https://arxiv.org/abs/2606.26603) | arXiv | [project](https://nperi-rai.github.io/bridge-project/) |
| 2026-06-12 | Egocentric Residual Policy, Data Efficiency | SJTU | [EgoGuide: Egocentric Guidance for Efficient Robot-Free Demonstration Collection and Learning](https://arxiv.org/abs/2606.14665) | arXiv | [project](https://silicx.github.io/EgoGuide/) |
| 2026-06-10 | Human Video Intent, Sim-to-Real, Cross-Embodiment | UIUC | [LUCID: Learning Embodiment-Agnostic Intent Models from Unstructured Human Videos for Scalable Dexterous Robot Skill Acquisition](https://arxiv.org/abs/2606.11628) | arXiv | [project](https://lucid-robot.github.io/) |
| 2026-06-10 | Generated Robot Demos, Visuomotor Policy, Robot-Data-Free | Georgia Tech | [EgoEngine: From Egocentric Human Videos to High-Fidelity Dexterous Robot Demonstrations](https://arxiv.org/abs/2606.12604) | arXiv / RSS 2026 Workshop | [project](https://egoengine.github.io/) |
| 2026-05-24 | Human Egocentric Video, Flow Matching, Zero-Shot Transfer | University of Maryland | [HumanEgo: Zero-Shot Robot Learning from Minutes of Human Egocentric Videos](https://arxiv.org/abs/2605.24934) | arXiv | [project](https://humanego-ai.github.io/) / [github](https://github.com/TX-Leo/HumanEgo) / [dataset](https://huggingface.co/datasets/Leo-TX/HumanEgo) |
| 2026-05-20 | Cross-View Diffusion, Mobile, Latency-Aware | Zhejiang University | [Mobile UMI: Cross-View Diffusion Policy with Decoupled Kinematics for Mobile Manipulation](https://arxiv.org/abs/2605.20894) | arXiv | [paper](https://arxiv.org/abs/2605.20894) |
| 2025-10-31 | Memory-Augmented Policy, Active Vision | UC Berkeley | [EgoMI: Learning Active Vision and Whole-Body Manipulation from Egocentric Human Demonstrations](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-10-15 | Tactile, Diffusion Policy, Force-Aware | TU Darmstadt / DFKI | [Tactile-Conditioned Diffusion Policy for Force-Aware Robotic Manipulation](https://arxiv.org/abs/2510.13324) | arXiv | [project](https://tactile-farm.github.io) |
| 2025-10-02 | Embodiment-Aware Diffusion, Controller Guidance | CMU | [UMI-on-Air: Embodiment-Aware Guidance for Embodiment-Agnostic Visuomotor Policies](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2024-10-31 | Egocentric, Imitation, Human Video | Georgia Tech | [EgoMimic: Scaling Imitation Learning via Egocentric Video](https://arxiv.org/abs/2410.24221) | arXiv | [project](https://egomimic.github.io/) / [github](https://github.com/SimarKareer/EgoMimic) |
| 2024-10-14 | 3D Diffusion Policy, Egocentric, Humanoid | Stanford / SFU / CMU | [iDP3: Generalizable Humanoid Manipulation with Improved 3D Diffusion Policies](https://arxiv.org/abs/2410.10803) | IROS 2025 | [project](https://humanoid-manipulation.github.io/) / [github](https://github.com/YanjieZe/Improved-3D-Diffusion-Policy) |
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
| 2026-07-07 | LingBot-VLA 2.0, 20 Embodiments, Human Video | Robbyant | [From Foundation to Application: Improving VLA Models in Practice](https://github.com/Robbyant/lingbot-vla-v2/blob/main/assets/LingBot_VLA_2_0.pdf) | Tech Report | [github](https://github.com/Robbyant/lingbot-vla-v2) / [model](https://huggingface.co/robbyant/lingbot-vla-v2-6b) / [paper](https://arxiv.org/abs/2607.06403) |
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

Structured references for embodiments, observation modalities, action spaces, storage formats, and evaluation dimensions in the UMI ecosystem.

### Embodiments

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-25 | Humanoid Whole-Body, VR-UMI | BAAI | [HumanoidUMI](https://arxiv.org/abs/2606.27239) | arXiv | [paper](https://arxiv.org/abs/2606.27239) |
| 2026-06-17 | Humanoid Loco-Manipulation, Head-Hand | SJTU | [HALOMI](https://arxiv.org/abs/2606.18772) | arXiv | [project](https://halomi-humanoid.github.io/) |
| 2026-06-11 | Humanoid, Whole-Body Tactile | Georgia Tech | [WT-UMI](https://wt-umi.github.io/WTUMI/) | arXiv | [paper](https://arxiv.org/abs/2606.13232) / [project](https://wt-umi.github.io/WTUMI/) |
| 2026-06-08 | Bidigital Gripper, Bimanual | AIRoA | [YUBI](https://yubi.airoa.io/) | Dataset | [paper](https://arxiv.org/abs/2606.10244) / [project](https://yubi.airoa.io/) |
| 2026-06-04 | Wearable Dexterous Hand | Peking University | [RealDexUMI](https://research.beingbeyond.com/realdexumi) | arXiv | [paper](https://arxiv.org/abs/2606.06033) / [project](https://research.beingbeyond.com/realdexumi) |
| 2026-05-20 | Mobile Base + Manipulator | Zhejiang University | [Mobile UMI](https://arxiv.org/abs/2605.20894) | arXiv | [paper](https://arxiv.org/abs/2605.20894) |
| 2026-02-06 | Humanoid, Pelvis, Feet, Bimanual | Tsinghua | [HuMI](https://humanoid-manipulation-interface.github.io/) | Dataset | [project](https://humanoid-manipulation-interface.github.io/) / [paper](https://arxiv.org/abs/2602.06643) |
| 2025-10-31 | Semi-Humanoid, Active Head | UC Berkeley | [EgoMI](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-10-02 | Aerial Manipulator, Controller-Constrained | CMU | [UMI-on-Air](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2025-05-28 | Dexterous Hand, Inspire, XHand | Stanford | [DexUMI](https://umi-data.github.io/) | Dataset | [data](https://umi-data.github.io/) |
| 2024-07-14 | Legged, Mobile Manipulation | Stanford | [UMI on Legs](https://umi-on-legs.github.io/) | Dataset | [project](https://umi-on-legs.github.io/) |
| 2024-02-15 | Bimanual, Parallel Gripper | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) |

### Observation Modalities

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
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
| 2026-04-15 | Image, LiDAR, Point Cloud | HKU | [UMI-3D](https://umi-3d.github.io/) | Dataset | [paper](https://arxiv.org/abs/2604.14089) / [dataset](https://github.com/Physical-Intelligence-Laboratory/UMI-3D-Dataset) |
| 2026-04-12 | RGB, Depth, Tactile, Force/Wrench | BAAI | [OmniUMI](https://arxiv.org/abs/2604.10647) | arXiv | [paper](https://arxiv.org/abs/2604.10647) |
| 2026-04-08 | Multi-View Video, Tactile, Trajectory | Fudan University | [TAMEn](https://opendrivelab.com/TAMEn) | arXiv / Dataset | [paper](https://arxiv.org/abs/2604.07335) / [dataset](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) |
| 2025-11-08 | Image, Tactile | Tsinghua | [ViTaMIn-B](https://chuanyune.github.io/ViTaMIn-B_page/) | Dataset | [project](https://chuanyune.github.io/ViTaMIn-B_page/) / [paper](https://arxiv.org/abs/2511.05858) |
| 2025-10-31 | Head View, Wrist Views, Head/Hand Poses | UC Berkeley | [EgoMI](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-09-23 | Image x2, Wrist F/T | GIST | [ManipForce](https://sites.google.com/view/manipforce/) | Dataset | [project](https://sites.google.com/view/manipforce/) |
| 2025-07-20 | Image, Tactile, Proprio | Columbia | [Touch in the Wild](https://binghao-huang.github.io/touch_in_the_wild/) | Dataset | [project](https://binghao-huang.github.io/touch_in_the_wild/) |
| 2024-06-27 | Image, Audio, Proprio | Stanford | [ManiWAV](https://mani-wav.github.io/) | Dataset | [project](https://mani-wav.github.io/) |
| 2024-02-15 | Image, Proprio, Bimanual | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) |

### Action Spaces

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-07-03 | Canonical Sphere Deformation, Cascade IK | UT Dallas | [Unified Hand Action Space](https://arxiv.org/abs/2607.03570) | arXiv / RSS 2026 Workshop | [project](https://irvlutd.github.io/UHAS/) |
| 2026-06-25 | Sparse Keypoints, Whole-Body Retargeting | BAAI | [HumanoidUMI](https://arxiv.org/abs/2606.27239) | arXiv | [paper](https://arxiv.org/abs/2606.27239) |
| 2026-06-17 | Head-Hand Targets, Latent Whole-Body Controller | SJTU | [HALOMI](https://arxiv.org/abs/2606.18772) | arXiv | [project](https://halomi-humanoid.github.io/) |
| 2026-06-15 | Camera-Space Actions, Morphology Conditioning | ACE Robotics | [ACE-Ego-0](https://arxiv.org/abs/2606.17200) | arXiv | [github](https://github.com/ACERobotics-VLA/ACE-Ego-0) |
| 2026-06-11 | EE Pose Chunks, Contact Force | Georgia Tech | [WT-UMI](https://wt-umi.github.io/WTUMI/) | arXiv | [paper](https://arxiv.org/abs/2606.13232) / [project](https://wt-umi.github.io/WTUMI/) |
| 2026-06-08 | 6-DoF EE, Gripper Aperture | AIRoA | [YUBI](https://yubi.airoa.io/) | Dataset | [paper](https://arxiv.org/abs/2606.10244) / [project](https://yubi.airoa.io/) |
| 2026-06-04 | Hand-Frame EE, Hand Commands | Peking University | [RealDexUMI](https://research.beingbeyond.com/realdexumi) | arXiv | [paper](https://arxiv.org/abs/2606.06033) / [project](https://research.beingbeyond.com/realdexumi) |
| 2026-05-20 | SE(2) Base, SE(3) Hand | Zhejiang University | [Mobile UMI](https://arxiv.org/abs/2605.20894) | arXiv | [paper](https://arxiv.org/abs/2605.20894) |
| 2026-04-12 | Virtual Target Pose, Force-Aware Execution | BAAI | [OmniUMI](https://arxiv.org/abs/2604.10647) | arXiv | [paper](https://arxiv.org/abs/2604.10647) |
| 2025-10-31 | 29D Action/State, Head Retargeting | UC Berkeley | [EgoMI](https://arxiv.org/abs/2511.00153) | arXiv | [project](https://egocentric-manipulation-interface.github.io/) |
| 2025-10-02 | EE Trajectory, Controller-Guided Diffusion | CMU | [UMI-on-Air](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2025-09-23 | 6-DoF EE, Parallel Gripper | GIST | [ManipForce](https://sites.google.com/view/manipforce/) | Dataset | [project](https://sites.google.com/view/manipforce/) |
| 2025-05-28 | DexHand, Human-Hand Interface | Stanford | [DexUMI](https://umi-data.github.io/) | Dataset | [data](https://umi-data.github.io/) |
| 2024-02-15 | Relative Trajectory, 6-DoF, Hardware-Agnostic | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) |

### Data Formats / Storage

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-16 | HuggingFace, NPZ, Four Embodiments | Rice University | [EgoInfinity](https://huggingface.co/datasets/Rice-RobotPI-Lab/egoinfinity) | Dataset | [paper](https://arxiv.org/abs/2606.17385) / [github](https://github.com/Rice-RobotPI-Lab/EgoInfinity) |
| 2026-06-12 | Lance, LeRobot v3, 30Hz, 18.8TB | Tencent Robotics X | [Hy-Embodied-0.5-VLA-Data](https://huggingface.co/datasets/tencent/Hy-Embodied-0.5-VLA-Data) | Dataset / VLA | [paper](https://arxiv.org/abs/2606.14409) / [github](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) |
| 2026-06-09 | HuggingFace, Benchmark Dataset | Soochow University | [UMI-Bench 1.0](https://umibenchmark.github.io/) | Dataset / Benchmark | [paper](https://arxiv.org/abs/2606.10382) / [dataset](https://huggingface.co/datasets/UMIbenchmark/UMI-Benchmark-v1) |
| 2026-06-08 | LeRobot, 30Hz, 1.20M Episodes | AIRoA | [YUBI](https://yubi.airoa.io/) | Dataset | [paper](https://arxiv.org/abs/2606.10244) / [project](https://yubi.airoa.io/) |
| 2026-06-03 | UMI-VQA, HuggingFace, Validated Trajectories | TeleAI | [VISTA](https://tele-umi-vista.github.io/) | Dataset / VLA | [paper](https://arxiv.org/abs/2606.04708) / [dataset](https://huggingface.co/collections/TeleEmbodied/vista) |
| 2026-05-24 | Raw Aria, MPS, Preprocessed Labels | University of Maryland | [HumanEgo](https://huggingface.co/datasets/Leo-TX/HumanEgo) | Dataset | [paper](https://arxiv.org/abs/2605.24934) / [github](https://github.com/TX-Leo/HumanEgo) |
| 2026-04-08 | HuggingFace, MP4, CSV Trajectories | Fudan University | [TAMEn](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) | Dataset | [paper](https://arxiv.org/abs/2604.07335) / [github](https://github.com/OpenDriveLab/TAMEn) |
| 2025-10-09 | LeRobot, Large-Scale Household | Shanghai AI Lab | [FastUMI-100K](https://github.com/MrKeee/FastUMI-100K) | Dataset | [github](https://github.com/MrKeee/FastUMI-100K) |
| 2025-09-23 | HDF5, Force/Torque | GIST | [ManipForce](https://sites.google.com/view/manipforce/) | Dataset | [project](https://sites.google.com/view/manipforce/) |
| 2025-06-02 | Visuo-Tactile, Trajectories, Open Dataset | Shanghai Innovation Institute | [FreeTacMan](https://arxiv.org/abs/2506.01941) | Dataset | [project](https://opendrivelab.com/FreeTacMan) / [github](https://github.com/OpenDriveLab/FreeTacMan) |
| 2024-11-06 | HDF5, Sim2Real | UT Austin | [LEGATO](https://ut-hcrl.github.io/LEGATO/) | Dataset | [project](https://ut-hcrl.github.io/LEGATO/) |
| 2024-10-24 | Zarr, MP4, Scaling | Tsinghua | [Data Scaling Laws](https://data-scaling-laws.github.io/) | Dataset | [project](https://data-scaling-laws.github.io/) |
| 2024-02-15 | Zarr, MP4, Replay Buffer | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [data](https://umi-data.github.io/) |

### Deployment / System Constraints

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-25 | Observed vs Desired Actions, DM-UMI, Contact | RAI Institute | [Bridging Handheld and Teleoperated Supervision for Contact-Rich Manipulation via State-Gated Experts](https://arxiv.org/abs/2606.26603) | arXiv | [project](https://nperi-rai.github.io/bridge-project/) |
| 2026-06-12 | Real-World Stack, Async Inference, UMI | Tencent Robotics X | [Hy-Embodied-0.5-VLA: From Vision-Language-Action Models to a Real-World Robot Learning Stack](https://arxiv.org/abs/2606.14409) | arXiv | [project](https://tairos.tencent.com/openSourceModels/hy-embodied-0.5-vla) / [github](https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA) / [data](https://huggingface.co/datasets/tencent/Hy-Embodied-0.5-VLA-Data) |
| 2026-04-08 | Online Validation, Recovery Teleop, Data Flywheel | Fudan University | [TAMEn: Tactile-Aware Manipulation Engine for Closed-Loop Data Collection in Contact-Rich Tasks](https://arxiv.org/abs/2604.07335) | arXiv | [project](https://opendrivelab.com/TAMEn) / [github](https://github.com/OpenDriveLab/TAMEn) / [dataset](https://huggingface.co/datasets/OpenDriveLab-org/TAMEn) |
| 2025-10-02 | Controller Guidance, Embodiment Gap, Aerial | CMU | [UMI-on-Air: Embodiment-Aware Guidance for Embodiment-Agnostic Visuomotor Policies](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2024-07-14 | Mobile Controller, Whole-Body, Legged | Stanford | [UMI on Legs: Making Manipulation Policies Mobile with a Manipulation-Centric Whole-body Controller](https://arxiv.org/abs/2407.10353) | CoRL 2024 | [github](https://github.com/real-stanford/umi-on-legs) |
| 2024-02-15 | Latency Matching, Relative Actions, Calibration | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) / [github](https://github.com/real-stanford/universal_manipulation_interface) |

### Evaluation / Surveys / Notes

| Date | Keywords | Institute (first) | Paper | Publication | Others |
| :--: | :------: | :---------------: | :--- | :---------: | :----: |
| 2026-06-12 | Online Data Guidance, Coverage, Data Quality | SJTU | [EgoGuide: Egocentric Guidance for Efficient Robot-Free Demonstration Collection and Learning](https://arxiv.org/abs/2606.14665) | arXiv | [project](https://silicx.github.io/EgoGuide/) |
| 2026-06-09 | Real-Robot Benchmark, UMI Data, Reproducibility | Soochow University | [UMI-Bench 1.0: An Open and Reproducible Real-World Benchmark for Tabletop Robotic Manipulation with UMI Data](https://arxiv.org/abs/2606.10382) | arXiv / Benchmark | [project](https://umibenchmark.github.io/) / [dataset](https://huggingface.co/datasets/UMIbenchmark/UMI-Benchmark-v1) / [models](https://huggingface.co/UMIbenchmark/UMI-Benchmark-v1-checkpoints) |
| 2026-06-03 | Physical Validation, Fisheye Alignment, VLA | TeleAI | [VISTA: Vision-Grounded and Physics-Validated Adaptation of UMI data for VLA Training](https://arxiv.org/abs/2606.04708) | arXiv | [project](https://tele-umi-vista.github.io/) / [github](https://github.com/TeleHuman/umi-vista) |
| 2025-10-02 | UMI-Ability, Embodiment Gap, Benchmark Suite | CMU | [UMI-on-Air: Embodiment-Aware Guidance for Embodiment-Agnostic Visuomotor Policies](https://arxiv.org/abs/2510.02614) | ICRA 2026 | [project](https://umi-on-air.github.io/) / [github](https://github.com/LeCAR-Lab/UMI-on-Air) |
| 2024-10-24 | Scaling Laws, Multi-Env, Data Efficiency | Tsinghua | [Data Scaling Laws](https://data-scaling-laws.github.io/) | Dataset / Study | [project](https://data-scaling-laws.github.io/) |
| 2024-02-15 | Zero-Shot, Cross-Platform, Long-Horizon | Stanford | [Universal Manipulation Interface: In-The-Wild Robot Teaching Without In-The-Wild Robots](https://arxiv.org/abs/2402.10329) | RSS 2024 | [project](https://umi-gripper.github.io/) |
| 2024-02-15 | Community Taxonomy, Family Index | Stanford | [UMI Data Community Site](https://umi-data.github.io/) | Website | [page](https://umi-data.github.io/) |

## Citation

Contributions are welcome!

Please check `AGENTS.md` before adding new entries, and use [Conventional Commits](https://www.conventionalcommits.org) for commit messages.

## Acknowledgement

This repo is inspired by [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D).
