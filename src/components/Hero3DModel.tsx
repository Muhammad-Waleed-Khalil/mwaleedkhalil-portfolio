"use client";
import React, { useEffect, useRef } from "react";

function Hero3DModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const modelRef = useRef<any>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    let mounted = true;

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Load Three.js and setup scene
    const setupScene = async () => {
      try {
        const THREE = await import("three");
        const { OBJLoader } = await import(
          "three/examples/jsm/loaders/OBJLoader.js"
        );

        if (!mounted || !containerRef.current) return;

        // Create scene
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Create camera
        const camera = new THREE.PerspectiveCamera(
          50,
          containerRef.current.clientWidth / containerRef.current.clientHeight,
          0.1,
          1000,
        );
        camera.position.z = 5;
        cameraRef.current = camera;

        // Create renderer
        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
        });
        renderer.setSize(
          containerRef.current.clientWidth,
          containerRef.current.clientHeight,
        );
        renderer.setClearColor(0x000000, 0); // Transparent background
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        const pointLight1 = new THREE.PointLight(0xffffff, 0.8);
        pointLight1.position.set(-5, 5, 5);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x60a5fa, 0.5);
        pointLight2.position.set(0, -5, 5);
        scene.add(pointLight2);

        // Load OBJ model
        const loader = new OBJLoader();
        const textureLoader = new THREE.TextureLoader();

        loader.load(
          "/3d vetcor/6337ff78a745b65bed3cdbac6212ecce.obj",
          (object) => {
            if (!mounted) return;

            // Load textures
            const baseTexture = textureLoader.load(
              "/3d vetcor/texture_pbr_20250901.png",
            );
            const normalMap = textureLoader.load(
              "/3d vetcor/texture_pbr_20250901_normal.png",
            );
            const metallicMap = textureLoader.load(
              "/3d vetcor/texture_pbr_20250901_metallic.png",
            );
            const roughnessMap = textureLoader.load(
              "/3d vetcor/texture_pbr_20250901_roughness.png",
            );

            // Apply materials to the model
            object.traverse((child: any) => {
              if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                  map: baseTexture,
                  normalMap: normalMap,
                  metalnessMap: metallicMap,
                  roughnessMap: roughnessMap,
                  metalness: 0.5,
                  roughness: 0.5,
                });
              }
            });

            // Scale and position - larger size and positioned behind the name
            object.scale.set(3.5, 3.5, 3.5);
            object.position.set(0, 0, -2);

            scene.add(object);
            modelRef.current = object;
          },
          undefined,
          (error) => {
            console.error("Error loading 3D model:", error);
          },
        );

        // Animation loop
        const animate = () => {
          if (!mounted) return;

          animationFrameRef.current = requestAnimationFrame(animate);

          // Rotate model based on mouse position
          if (modelRef.current) {
            const targetRotationY = mousePosition.current.x * 0.5;
            const targetRotationX = mousePosition.current.y * 0.3;

            // Smooth lerp
            modelRef.current.rotation.y +=
              (targetRotationY - modelRef.current.rotation.y) * 0.05;
            modelRef.current.rotation.x +=
              (targetRotationX - modelRef.current.rotation.x) * 0.05;
          }

          if (rendererRef.current && sceneRef.current && cameraRef.current) {
            rendererRef.current.render(sceneRef.current, cameraRef.current);
          }
        };

        animate();

        // Handle window resize
        const handleResize = () => {
          if (
            !containerRef.current ||
            !cameraRef.current ||
            !rendererRef.current
          )
            return;

          cameraRef.current.aspect =
            containerRef.current.clientWidth /
            containerRef.current.clientHeight;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(
            containerRef.current.clientWidth,
            containerRef.current.clientHeight,
          );
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      } catch (error) {
        console.error("Error setting up 3D scene:", error);
      }
    };

    setupScene();

    // Cleanup function
    return () => {
      mounted = false;
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }

      if (sceneRef.current) {
        sceneRef.current.traverse((object: any) => {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material: any) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}

export default Hero3DModel;
