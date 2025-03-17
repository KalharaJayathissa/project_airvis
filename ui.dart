import 'package:flutter/material.dart';

void main() {
  runApp(AirVisApp());
}

class AirVisApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'AirVis',
      theme: ThemeData.dark(),
      home: HomeScreen(),
    );
  }
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("AirVis")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("34°C  |  22°C", style: TextStyle(fontSize: 24)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => AutoControlScreen()),
                );
              },
              child: Text("Control using AirVis"),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(builder: (context) => ManualControlScreen()),
                );
              },
              child: Text("Manual Control Panel"),
            ),
          ],
        ),
      ),
    );
  }
}

class AutoControlScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Auto Control")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.people, size: 100, color: Colors.blue),
            Text("Detected Human Density: High", style: TextStyle(fontSize: 20)),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              child: Text("AirVis Turned ON"),
            ),
          ],
        ),
      ),
    );
  }
}

class ManualControlScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Manual Control")),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("Set the Temperature", style: TextStyle(fontSize: 20)),
            SizedBox(height: 10),
            Slider(value: 22, min: 16, max: 30, onChanged: (value) {}),
            SizedBox(height: 20),
            Text("Fan Speed"),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(onPressed: () {}, child: Text("Low")),
                SizedBox(width: 10),
                ElevatedButton(onPressed: () {}, child: Text("Medium")),
                SizedBox(width: 10),
                ElevatedButton(onPressed: () {}, child: Text("High")),
              ],
            ),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {},
              child: Text("Apply"),
            ),
          ],
        ),
      ),
    );
  }
}
