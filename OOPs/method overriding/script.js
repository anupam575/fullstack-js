// Parent class - System
class System {
  // This is the default method for showing a system update notification
  updateNotification() {
    console.log("System is updating... Please wait.");
  }
}

// Child class - MobileSystem inherits from System
class MobileSystem extends System {
  // Method Overriding:
  // We are redefining the same method from the parent class
  // to give a customized message for mobile systems
  updateNotification() {
    console.log("New Mobile System Update is available!");
    console.log("This update includes:");
    console.log("- Security patch improvements");
    console.log("- Better battery performance");
    console.log("- Updated user interface (UI)");
    console.log("Go to Settings > System Update to install now.");
  }
}

// Another child class - DesktopSystem also inherits from System
class DesktopSystem extends System {
  // Method Overriding:
  // Again, we're customizing the same method for desktop users
  updateNotification() {
    console.log("New Desktop System Update is ready!");
    console.log("What's included:");
    console.log("- Enhanced multitasking support");
    console.log("- Latest drivers and security features");
    console.log("- Performance improvements in UI");
    console.log("Go to Control Panel > Updates to install.");
  }
}

// Function demonstrating Polymorphism
// It can accept any object that extends System
function notifyUpdate(systemInstance) {
  // Runtime Polymorphism:
  // The method that gets executed depends on the actual object type (Mobile or Desktop)
  systemInstance.updateNotification();
}

// Creating objects
let generalSystem = new System();       // Parent class object
let phone = new MobileSystem();         // MobileSystem (child)
let pc = new DesktopSystem();           // DesktopSystem (child)

// Calling the notifyUpdate function with different objects
notifyUpdate(generalSystem);  // Output: Default system update message
notifyUpdate(phone);          // Output: Mobile-specific update message
notifyUpdate(pc);             // Output: Desktop-specific update message
//System class एक बेस क्लास है, जिसमें एक default updateNotification() method है।

//MobileSystem और DesktopSystem दोनों ने उस method को override किया – यानी, उन्होंने अपना custom version बना लिया।

//notifyUpdate() function polymorphism दिखाता है — object के type के हिसाब से method call बदल जाता है।

