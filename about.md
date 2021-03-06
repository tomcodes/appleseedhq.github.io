---
layout: default
title: About
---

## Features

### Light Transport

* Distributed Ray Tracing
* Unidirectional Path Tracing
* Light Tracing
* Stochastic Progressive Photon Mapping (SPPM)

### Camera Models

* Pinhole camera
* Thin lens camera (for depth of field)
  - Support for polygonal diaphragms
* Spherical camera (to make environment maps)

### Reflection Models

* Lambertian BRDF (purely diffuse)
* Specular BRDF (perfect mirror)
* Specular BTDF (clear glass)
* Microfacet BRDFs
  - Oren-Nayar
  - Ward
  - Blinn
  - GGX
* Ashikhmin BRDF (anisotropic)
* Kelemen BRDF
* Arbitrary mixtures of BRDFs

### Light Source Models

* Point light
* Spot light
  - Support for gobos
* Directional/parallel light
* Mesh light
  - Purely diffuse
  - Cone-shaped
* Image-based lighting
* Preetham physically-based day sky
* Hosek & Wilkie physically-based day sky
* Physically based sun

### Motion Blur

* Camera motion blur
* Transformation motion blur
* Deformation motion blur
* Arbitrarily many steps for all forms of motion blur

### Rendering Modes

* Multipass rendering
* Progressive rendering
* Interactive rendering
* Live scene editing

### Production Features

* Programmable shading via Open Shading Language (**experimental**)
* Rule-based render layers
* Hierarchical instancing
* Automatic, on-the-fly color space transformations and gamma/ungamma
* Ray bias
* Light Near Start
* Max Ray Intensity
* Many diagnostic modes

### Interoperability

* Geometry: Alembic, OBJ
  - Plus our own proprietary high performance format
* Textures: OpenEXR, PNG
* mayaseed: fully featured Maya exporter
* mayaToAppleseed: full native integration of appleseed into Maya (work in progress)
* Blenderseed: Blender exporter

### Performance

* Fully multithreaded, highly scalable
* Memory-bounded texture cache
* Multiple Importance Sampling (MIS)
* Intersection filters

### Hackability

* Everything is open source under the MIT license
* Cross platform: Windows, Linux and OS X, 32-bit and 64-bit
* Fully featured C++ API
* Fully featured Python API (Python 2 and Python 3)
* More than 1200 built-in unit tests
* Hundreds of built-in performance regression tests
* Full functional test suite

### Miscellaneous

* Fully spectral rendering (400-700 nm range with 10 nm increment)
* Dropbox-based render farm tools
