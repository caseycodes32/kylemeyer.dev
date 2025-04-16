import React from 'react';
import { Button } from '@/components/ui/button'; // Assumed path, adjust if needed
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; // Assumed path
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Assumed path
import { Badge } from '@/components/ui/badge'; // Assumed path
import { Github, Linkedin, Instagram, ArrowRight } from 'lucide-react'; // Assumed path
import { cn } from '@/lib/utils';  // Assumed path
import { motion } from 'framer-motion'; // Assumed path

// Placeholder image - replace with actual image URL
const headshotImage = "https://placehold.co/400x400/EEE/31343C";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

// Project Card Component
const ProjectCard = ({ title, description, technologies, link, image }: { title: string, description: string, technologies: string[], link: string, image: string }) => {
    return (
        <motion.div variants={itemVariants}>
            <Card className="hover:shadow-lg transition-shadow border-gray-800 bg-gray-950/90 backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
                    <CardDescription className="text-gray-400">{description}</CardDescription>
                </CardHeader>
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover rounded-t-lg mb-4" // Added image styling
                    />
                )}
                <CardContent>
                    <div className="mb-4">
                        <span className="text-sm font-medium text-gray-300">Technologies Used:</span>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {technologies.map((tech, index) => (
                                <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-gray-800 text-gray-200 border-gray-700"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <Button
                        asChild
                        variant="outline"
                        className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 border-blue-500/30"
                    >
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            View Project <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
};

// Main App Component
const PortfolioWebsite = () => {
    return (
        <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black min-h-screen">
            <div className="container mx-auto px-4 py-12 w-full"> {/* Added w-full to the container */}
                <motion.div
                    className="text-center space-y-6 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Avatar className="mx-auto h-32 w-32 border-4 border-gray-800">
                        <AvatarImage src={headshotImage} alt="Your Name" />
                        <AvatarFallback>YN</AvatarFallback> {/* Fallback for "Your Name" */}
                    </Avatar>
                    <h1 className="text-4xl font-bold text-white">Your Name</h1>
                    <p className="text-lg text-gray-300">
                        Recent Graduate of University Name
                    </p>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A highly motivated and creative recent graduate with a passion for
                        [Your Field, e.g., Software Engineering] and a strong foundation in
                        [Mention Key Skills]. Eager to contribute to innovative projects and
                        continue learning in a dynamic environment.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Button
                            asChild
                            variant="outline"
                            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 border-blue-500/30"
                        >
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" /> GitHub
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="text-green-400 hover:text-green-300 hover:bg-green-500/20 border-green-500/30"
                        >
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="text-pink-400 hover:text-pink-300 hover:bg-pink-500/20 border-pink-500/30"
                        >
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <Instagram className="mr-2 h-4 w-4" /> Instagram
                            </a>
                        </Button>
                    </div>
                </motion.div>

                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Computer Science Projects</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full" // Added w-full
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <ProjectCard
                            title="Project 1: Web Application"
                            description="A full-stack web application built with React and Node.js."
                            technologies={['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS']}
                            link="#" // Replace with actual link
                            image="https://placehold.co/600x400/00FFFF/FFF"
                        />
                        <ProjectCard
                            title="Project 2: Mobile App"
                            description="A mobile application developed using React Native."
                            technologies={['React Native', 'JavaScript', 'Firebase']}
                            link="#" // Replace with actual link
                            image="https://placehold.co/600x400/EEE/31343C"
                        />
                        <ProjectCard
                            title="Project 3: Data Analysis"
                            description="A data analysis project using Python and Pandas."
                            technologies={['Python', 'Pandas', 'Matplotlib', 'Jupyter Notebook']}
                            link="#"
                            image="https://placehold.co/600x400/800080/FFF"
                        />
                        <ProjectCard
                            title="Project 4: Machine Learning"
                            description="A machine learning project using Python and Scikit-learn."
                            technologies={['Python', 'Scikit-learn', 'TensorFlow', 'Jupyter Notebook']}
                            link="#"
                            image="https://placehold.co/600x400/008000/FFF"
                        />
                    </motion.div>
                </section>

                <section>
                    <h2 className="text-3xl font-semibold text-white mb-8 text-center">Automotive Projects</h2>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full" // Added w-full
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <ProjectCard
                            title="Project A: Engine Analysis"
                            description="Analysis of engine performance using simulation software."
                            technologies={['MATLAB', 'Simulink', 'CAD']}
                            link="#" // Replace with actual link
                            image="https://placehold.co/600x400/FF0000/FFF"
                        />
                        <ProjectCard
                            title="Project B: Vehicle Dynamics"
                            description="Simulation of vehicle dynamics and handling."
                            technologies={['CarSim', 'SolidWorks', 'Adams']}
                            link="#" // Replace with actual link
                            image="https://placehold.co/600x400/0000FF/FFF"
                        />
                        <ProjectCard
                            title="Project C: Autonomous Navigation"
                            description="Development of algorithms for autonomous vehicle navigation."
                            technologies={['ROS', 'Python', 'LiDAR', 'SLAM']}
                            link="#" // Replace with actual link
                            image="https://placehold.co/600x400/FFFF00/000"
                        />
                        <ProjectCard
                            title="Project D: Electric Vehicle Design"
                            description="Design and analysis of an electric vehicle drivetrain."
                            technologies={['ANSYS', 'MATLAB', 'Battery Management Systems']}
                            link="#" // Replace with actual link
                            image="https://placehold.co/600x400/808080/FFF"
                        />
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default PortfolioWebsite;
