/*
- 너의 평점은

치훈이의 전공평점을 계산해주는 프로그램을 작성해보자.
졸업하기 위해서는, 전공평점이 3.3 이상이여야 한다.
전공평점은 전공과목별 (학점 × 과목평점)의 합을 학점의 총합으로 나눈 값이다.

A+	4.5
A0	4.0
B+	3.5
B0	3.0
C+	2.5
C0	2.0
D+	1.5
D0	1.0
F	0.0

P/F 과목의 경우 등급이 P 또는 F로 표시되는데, 등급이 P인 과목은 계산에서 제외

[입력]
ObjectOrientedProgramming1 3.0 A+
IntroductiontoComputerEngineering 3.0 A+
ObjectOrientedProgramming2 3.0 A0
CreativeComputerEngineeringDesign 3.0 A+
AssemblyLanguage 3.0 A+
InternetProgramming 3.0 B0
ApplicationProgramminginJava 3.0 A0
SystemProgramming 3.0 B0
OperatingSystem 3.0 B0
WirelessCommunicationsandNetworking 3.0 C+
LogicCircuits 3.0 B0
DataStructure 4.0 A+
MicroprocessorApplication 3.0 B+
EmbeddedSoftware 3.0 C0
ComputerSecurity 3.0 D+
Database 3.0 C+
Algorithm 3.0 B0
CapstoneDesigninCSE 3.0 B+
CompilerDesign 3.0 D0
ProblemSolving 4.0 P

[출력]
3.284483
*/

const fs = require('fs');
const input = fs.readFileSync("input.txt").toString().trim().split('\n');

const GRADE = { 
    "A+": 4.5, "A0": 4.0, 
    "B+": 3.5, "B0": 3.0,
    "C+": 2.5, "C0": 2.0, 
    "D+": 1.5, "D0": 1.0, 
    "F": 0.0
};

let totalScore = 0;   
let totalCredits = 0;

for (const line of input) {
    const [_, credit, grade] = line.split(" ");
    if (grade === "P") continue;

    const point = GRADE[grade];
    const creditNum = Number(credit);

    totalScore += (point * creditNum);
    totalCredits += creditNum;
}

console.log((totalScore / totalCredits).toFixed(6));